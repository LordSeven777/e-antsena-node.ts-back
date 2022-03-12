import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// User model
import { UserModel } from "../users";

// Interface for the shop attributes
interface ShopAttributes {
    shop_id: number;
    shop_name: string;
    description: string;
    photo_url: string | null;
    cover_photo_url: string | null;
    address: string;
    email: string;
    is_open: boolean;
    created_at: string;
    owner_id: number;
}

// Shop attributes at creation time
interface ShopCreationAttributes extends Optional<ShopAttributes, "shop_id" | "photo_url" | "cover_photo_url" | "is_open" | "created_at"> {}

// Class for the shop model
class ShopModel extends Model<ShopAttributes, ShopCreationAttributes> implements ShopAttributes {
    public shop_id!: number;
    public shop_name!: string;
    public description!: string;
    public photo_url!: string | null;
    public cover_photo_url!: string | null;
    public address!: string;
    public email!: string;
    public is_open!: boolean;
    public created_at!: string;
    public owner_id!: number;
}

// Initializing the the user model schema
const shopModelSchema: ModelAttributes<ShopModel, ShopAttributes> = {
    shop_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
    },
    shop_name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photo_url: {
        type: DataTypes.STRING(255),
    },
    cover_photo_url: {
        type: DataTypes.STRING(255),
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    is_open: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    owner_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        }
    }
};
ShopModel.init(shopModelSchema, {
    sequelize,
    tableName: "shops",
    modelName: "Shop",
    timestamps: false
});

// Associating with the user model
UserModel.hasOne(ShopModel, {
    foreignKey: "owner_id",
    as: "shop"
});
ShopModel.belongsTo(UserModel, {
    foreignKey: "owner_id",
    as: "owner"
});

export default ShopModel;
export { ShopAttributes, ShopCreationAttributes, shopModelSchema };