import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Product photos config
import { productPhotosConfig } from "../../configs/photos-config";

// The sequelize database connection instance
import sequelize from "../../db/connection";

// Product model
import { ProductModel } from "../products";

// Interface for the product photo attributes
interface ProductPhotoAttributes {
    photoId: number;
    path: string;
    isMain: boolean;
    productId: number;
}

// Interface for the product attributes at creation time
interface ProductPhotoCreationAttributes extends Optional<ProductPhotoAttributes, "photoId" | "isMain"> { }

// Class for the product photo model
class ProductPhotoModel extends Model<ProductPhotoAttributes, ProductPhotoCreationAttributes> implements ProductPhotoAttributes {
    public photoId!: number;
    public path!: string;
    public isMain!: boolean;
    public productId!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initializing the product model schema
const productPhotoModelSchema: ModelAttributes<ProductPhotoModel, ProductPhotoAttributes> = {
    photoId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
    },
    path: {
        type: DataTypes.STRING(255),
        allowNull: false,
        get() {
            // Considering the application's URL
            return productPhotosConfig.getPhotoFullURL(this.getDataValue("path"));
        }
    },
    isMain: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    productId: {
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
    underscored: true
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