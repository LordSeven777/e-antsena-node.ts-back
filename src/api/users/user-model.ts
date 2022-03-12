import { Model, Optional, DataTypes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Interface for the user attributes
interface UserAttributes {
    user_id: number;
    firstname: string;
    lastname: string;
    gender: string;
    photo_url: string | null;
    email: string;
    password: string;
    joined_at: string;
    role: string;
}

// User attributes at creation time
interface UserCreationAttributes extends Optional<UserAttributes, "user_id" | "photo_url" | "joined_at" | "role"> {}

// Class for the user model
class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public user_id!: number;
    public firstname!: string;
    public lastname!: string;
    public gender!: string;
    public photo_url!: string | null;
    public email!: string;
    public password!: string;
    public joined_at!: string;
    public role!: string;
}

// Initializing the the user model schema
const userModelSchema = {
    user_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
    },
    firstname: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    lastname: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM('M', 'F'),
        allowNull: false
    },
    photo_url: {
        type: DataTypes.STRING(255),
    },
    email: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    joined_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    role: {
        type: DataTypes.ENUM('basic', 'super_admin'),
        allowNull: false,
        defaultValue: 'basic'
    }
};
UserModel.init(userModelSchema, {
    sequelize,
    tableName: "users",
    modelName: "User",
    timestamps: false
});

export default UserModel;
export { UserAttributes, UserCreationAttributes, userModelSchema };