import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// The sequelize database connection instance
import sequelize from "../../db/connection";

// Product model
import { ProductModel } from "../products";

// Interface for the product photo attributes
interface ProductPhotoAttributes {
    photo_id: number;
    url: string;
    is_main: boolean;
    added_at: string;
    product_id: number;
}

// Interface for the product attributes at creation time
interface ProductPhotoCreationAttributes extends Optional<ProductPhotoAttributes, "photo_id" | "is_main" | "added_at"> {}

// Class for the product photo model
class ProductPhotoModel extends Model<ProductPhotoAttributes, ProductPhotoCreationAttributes> implements ProductPhotoAttributes {
    public photo_id!: number;
    public url!: string;
    public is_main!: boolean;
    public readonly added_at!: string;
    public product_id!: number;
}

// Initializing the product model schema
const productPhotoModelSchema: ModelAttributes<ProductPhotoModel, ProductPhotoAttributes> = {
    photo_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
    },
    url: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    is_main: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    added_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        allowNull: false,
        references: {
            model: "products",
            key: "product_id"
        }
    }
};
ProductPhotoModel.init(productPhotoModelSchema, {
    sequelize,
    tableName: "products_photos",
    modelName: "ProductPhoto",
    timestamps: false
});

// Associating with the product model
ProductModel.hasMany(ProductPhotoModel, {
    as: "photos",
    foreignKey: "product_id",
});
ProductPhotoModel.belongsTo(ProductModel, {
    as: "product",
    foreignKey: "product_id",
    onDelete: "CASCADE"
});

export default ProductPhotoModel;
export { ProductPhotoAttributes, ProductPhotoCreationAttributes, productPhotoModelSchema };