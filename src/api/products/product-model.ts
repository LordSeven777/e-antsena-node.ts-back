import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// Product photos config
import { productPhotosConfig } from "../../configs/photos-config";

// The sequelize database connection instance
import sequelize from "../../db/connection";

// Shop model
import { ShopModel } from "../shops";

// Interface for the product attributes
interface ProductAttributes {
    productId: number;
    label: string;
    description: string;
    photoPath: string;
    price: number;
    forSale: boolean;
    quantity: number;
    shopId: number;
}

// Interface for the product attributes at creation time
interface ProductCreationAttributes extends Optional<ProductAttributes, "productId" | "forSale" | "quantity"> { }

// Class for the product model
class ProductModel extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public productId!: number;
    public label!: string;
    public description!: string;
    public photoPath!: string;
    public price!: number;
    public forSale!: boolean;
    public quantity!: number;
    public shopId!: number;

    // Timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

// Initializing the product model schema
const productModelSchema: ModelAttributes<ProductModel, ProductAttributes> = {
    productId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        autoIncrement: true
    },
    label: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    photoPath: {
        type: DataTypes.STRING(255),
        allowNull: false,
        get() {
            // Considering the application's URL
            return productPhotosConfig.getPhotoFullURL(this.getDataValue("photoPath"));
        }
    },
    price: {
        type: DataTypes.FLOAT(8).UNSIGNED,
        allowNull: false
    },
    quantity: {
        type: DataTypes.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    forSale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    shopId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        allowNull: false,
        references: {
            model: "shops",
            key: "shop_id"
        }
    }
};
ProductModel.init(productModelSchema, {
    sequelize,
    tableName: "products",
    modelName: "Product",
    underscored: true
});

// Associating with the shop model
ShopModel.hasMany(ProductModel, {
    as: "products",
    foreignKey: "shop_id",
});
ProductModel.belongsTo(ShopModel, {
    as: "shop",
    foreignKey: "shop_id",
    onDelete: "CASCADE"
});

export default ProductModel;
export { ProductAttributes, ProductCreationAttributes, productModelSchema };