import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { UserModel } from "../users";
import { ShopModel } from "../shops";

// Interface for the shop rating attributes
interface ShopRatingAttributes {
    user_id: number;
    shop_id: number;
    score: number;
    comment: string | null;
    created_at: string;
    updated_at: string;
}

// Interface for the shop rating attributes at creation time
interface ShopRatingCreationAttributes extends Optional<ShopRatingAttributes, "comment" | "created_at" | "updated_at"> {}

// Class for the shop rating model
class ShopRatingModel extends Model<ShopRatingAttributes, ShopRatingCreationAttributes> implements ShopRatingAttributes {
    public user_id!: number;
    public shop_id!: number;
    public score!: number;
    public comment!: string | null;
    public created_at!: string;
    public updated_at!: string;
}

// Initializing the shop rating model schema
const shopRatingModelSchema: ModelAttributes<ShopRatingModel, ShopRatingAttributes> = {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "users",
            key: "user_id"
        }
    },
    shop_id: {
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
ShopRatingModel.init(shopRatingModelSchema, {
    sequelize,
    tableName: "shop_ratings",
    modelName: "ShopRating",
    timestamps: false
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
    foreignKey: "shop_id",
    onDelete: "CASCADE"
});
ShopRatingModel.belongsTo(ShopModel, {
    as: "shop",
    foreignKey: "shop_id",
});
UserModel.belongsToMany(ShopModel, {
    through: ShopRatingModel,
    foreignKey: "user_id",
    otherKey: "shop_id"
});
ShopModel.belongsToMany(UserModel, {
    through: ShopRatingModel,
    foreignKey: "shop_id",
    otherKey: "user_id"
});

export default ShopRatingModel;
export { ShopRatingAttributes, ShopRatingCreationAttributes, shopRatingModelSchema };