import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { UserModel } from "../users";
import { ProductModel } from "../products";

// Interface for a product rating attributes
interface ProductRatingAttributes {
    userId: number;
    productId: number;
    score: number;
    comment: string | null;
};

// Interface for a product rating attributes at creation time
interface ProductRatingCreationAttributes extends Optional<ProductRatingAttributes, "comment"> {}

// Class for the product rating model
class ProductRatingModel extends Model<ProductRatingAttributes, ProductRatingCreationAttributes> implements ProductRatingAttributes {
    public userId!: number;
    public productId!: number;
    public score!: number;
    public comment!: string | null;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initializing the product photo rating schema
const productRatingModelSchema: ModelAttributes<ProductRatingModel, ProductRatingAttributes> = {
    userId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "users",
            key: "user_id"
        }
    },
    productId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "products",
            key: "product_id"
        }
    },
    score: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
            min: 1,
            max: 5
        }
    },
    comment: {
        type: DataTypes.TEXT,
    }
};
ProductRatingModel.init(productRatingModelSchema, {
    sequelize,
    tableName: "products_ratings",
    modelName: "ProductRating",
    underscored: true
});

// Associating with the user model and product model
UserModel.hasMany(ProductRatingModel, {
    as: "productRatings",
    foreignKey: "user_id",
});
ProductRatingModel.belongsTo(UserModel, {
    as: "rater",
    foreignKey: "user_id",
});
ProductModel.hasMany(ProductRatingModel, {
    as: "ratings",
    foreignKey: "product_id"
});
ProductRatingModel.belongsTo(ProductModel, {
    as: "product",
    foreignKey: "product_id",
});
UserModel.belongsToMany(ProductModel, {
    through: ProductRatingModel,
    foreignKey: "user_id",
    otherKey: "product_id",
    as: "ratedProducts"
});
ProductModel.belongsToMany(UserModel, {
    through: ProductRatingModel,
    foreignKey: "product_id",
    otherKey: "user_id",
    as: "raters"
});

export default ProductRatingModel;
export { ProductRatingAttributes, ProductRatingCreationAttributes, productRatingModelSchema };