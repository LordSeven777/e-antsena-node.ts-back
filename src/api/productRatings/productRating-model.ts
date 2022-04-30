import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { UserModel } from "../users";
import { ProductModel } from "../products";

// Interface for a product rating attributes
interface ProductRatingAttributes {
    user_id: number;
    product_id: number;
    score: number;
    comment: string | null;
    created_at: string;
    updated_at: string;
};

// Interface for a product rating attributes at creation time
interface ProductRatingCreationAttributes extends Optional<ProductRatingAttributes, "created_at" | "updated_at"> {}

// Class for the product rating model
class ProductRatingModel extends Model<ProductRatingAttributes, ProductRatingCreationAttributes> implements ProductRatingAttributes {
    public user_id!: number;
    public product_id!: number;
    public score!: number;
    public comment!: string | null;
    public created_at!: string;
    public updated_at!: string;
}

// Initializing the product photo rating schema
const productRatingModelSchema: ModelAttributes<ProductRatingModel, ProductRatingAttributes> = {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "users",
            key: "user_id"
        }
    },
    product_id: {
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
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
};
ProductRatingModel.init(productRatingModelSchema, {
    sequelize,
    tableName: "products_ratings",
    modelName: "ProductRating",
    timestamps: false
});

// Associating with the user model and product model
UserModel.hasMany(ProductRatingModel, {
    as: "product_ratings",
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
    as: "rated_products"
});
ProductModel.belongsToMany(UserModel, {
    through: ProductRatingModel,
    foreignKey: "product_id",
    otherKey: "user_id",
    as: "raters"
});

export default ProductRatingModel;
export { ProductRatingAttributes, ProductRatingCreationAttributes, productRatingModelSchema };