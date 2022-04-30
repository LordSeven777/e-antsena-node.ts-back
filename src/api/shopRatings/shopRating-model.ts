import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { UserModel } from "../users";
import { ShopModel } from "../shops";

// Interface for the shop rating attributes
interface ShopRatingAttributes {
    userId: number;
    shopId: number;
    score: number;
    comment: string | null;
}

// Interface for the shop rating attributes at creation time
interface ShopRatingCreationAttributes extends Optional<ShopRatingAttributes, "comment"> {}

// Class for the shop rating model
class ShopRatingModel extends Model<ShopRatingAttributes, ShopRatingCreationAttributes> implements ShopRatingAttributes {
    public userId!: number;
    public shopId!: number;
    public score!: number;
    public comment!: string | null;
}

// Initializing the shop rating model schema
const shopRatingModelSchema: ModelAttributes<ShopRatingModel, ShopRatingAttributes> = {
    userId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "users",
            key: "user_id"
        }
    },
    shopId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "shops",
            key: "shop_id"
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
ShopRatingModel.init(shopRatingModelSchema, {
    sequelize,
    tableName: "shop_ratings",
    modelName: "ShopRating",
    underscored: true
});

// Associating with the user model and shop model
UserModel.hasMany(ShopRatingModel, {
    as: "ratings",
    foreignKey: "user_id",
});
ShopRatingModel.belongsTo(UserModel, {
    as: "rater",
    foreignKey: "user_id",
});
ShopModel.hasMany(ShopRatingModel, {
    as: "ratings",
    foreignKey: "shop_id"
});
ShopRatingModel.belongsTo(ShopModel, {
    as: "shop",
    foreignKey: "shop_id",
});
UserModel.belongsToMany(ShopModel, {
    through: ShopRatingModel,
    foreignKey: "user_id",
    otherKey: "shop_id",
    as: "rated_shops"
});
ShopModel.belongsToMany(UserModel, {
    through: ShopRatingModel,
    foreignKey: "shop_id",
    otherKey: "user_id",
    as: "raters"
});

export default ShopRatingModel;
export { ShopRatingAttributes, ShopRatingCreationAttributes, shopRatingModelSchema };