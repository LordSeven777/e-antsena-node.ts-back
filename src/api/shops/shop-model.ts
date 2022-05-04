import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Shop photos config
import { shopPhotosConfig } from "../../configs/photos-config";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// User model
import UserModel from "../users/user-model";

// Interface for the shop attributes
interface ShopAttributes {
    shopId: number;
    name: string;
    description: string;
    photoPath: string | null;
    coverPhotoPath: string | null;
    address: string;
    email: string;
    isOpen: boolean;
    ownerId: number;
}

// Shop attributes at creation time
interface ShopCreationAttributes extends Optional<ShopAttributes, "shopId" | "photoPath" | "coverPhotoPath" | "isOpen"> { }

// Class for the shop model
class ShopModel extends Model<ShopAttributes, ShopCreationAttributes> implements ShopAttributes {
    public shopId!: number;
    public name!: string;
    public description!: string;
    public photoPath!: string | null;
    public coverPhotoPath!: string | null;
    public address!: string;
    public email!: string;
    public isOpen!: boolean;
    public ownerId!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initializing the the user model schema
const shopModelSchema: ModelAttributes<ShopModel, ShopAttributes> = {
    shopId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photoPath: {
        type: DataTypes.STRING(255),
        get() {
            // Considering the application's URL
            return shopPhotosConfig.getPhotoFullURL(this.getDataValue("photoPath"));
        }
    },
    coverPhotoPath: {
        type: DataTypes.STRING(255),
        get() {
            // Considering the application's URL
            return shopPhotosConfig.getPhotoFullURL(this.getDataValue("coverPhotoPath"));
        }
    },
    address: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    isOpen: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    ownerId: {
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
    underscored: true
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