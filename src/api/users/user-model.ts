import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Interface for the user attributes
interface UserAttributes {
    userId: number;
    firstname: string;
    lastname: string;
    gender: string;
    photoPath: string | null;
    email: string;
    password: string;
    role: string;
}

// User attributes at creation time
interface UserCreationAttributes extends Optional<UserAttributes, "userId" | "photoPath" | "role"> {}

// Class for the user model
class UserModel extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    public userId!: number;
    public firstname!: string;
    public lastname!: string;
    public gender!: string;
    public photoPath!: string | null;
    public email!: string;
    public password!: string;
    public role!: string;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initializing the the user model schema
const userModelSchema: ModelAttributes<UserModel, UserAttributes> = {
    userId: {
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
    photoPath: {
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
    underscored: true
});

export default UserModel;
export { UserAttributes, UserCreationAttributes, userModelSchema };