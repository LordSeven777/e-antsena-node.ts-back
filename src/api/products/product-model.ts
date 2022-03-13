import { Model, Optional, DataTypes, ModelAttributes } from "sequelize";

// The sequelize database connection instance
import sequelize from "../../db/connection";

// Shop model
import { ShopModel } from "../shops";

// Interface for the product attributes
interface ProductAttributes {
    product_id: number;
    label: string;
    description: string;
    photo_url: string;
    price: number;
    is_for_sale: boolean;
    quantity: number;
    added_at: string;
    shop_id: number;
}

// Interface for the product attributes at creation time
interface ProductCreationAttributes extends Optional<ProductAttributes, "product_id" | "is_for_sale" | "quantity" | "added_at"> {}

// Class for the product model
class ProductModel extends Model<ProductAttributes, ProductCreationAttributes> implements ProductAttributes {
    public product_id!: number;
    public label!: string;
    public description!: string;
    public photo_url!: string;
    public price!: number;
    public is_for_sale!: boolean;
    public quantity!: number;
    public readonly added_at!: string;
    public shop_id!: number;
}

// Initializing the product model schema
const productModelSchema: ModelAttributes<ProductModel, ProductAttributes> = {
    product_id: {
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
    photo_url: {
        type: DataTypes.STRING(255),
        allowNull: false
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
    is_for_sale: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    added_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    shop_id: {
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
    timestamps: false
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