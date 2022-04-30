import { Model, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { ProductModel } from "../products";
import { CategoryModel } from "../categories";
 
// Interface for a product_category relation attributes
interface Product_Category_attributes {
    productId: number;
    categoryId: string;
}

// Class for the product_category relation model
class Product_Category_model extends Model<Product_Category_attributes> implements Product_Category_attributes {
    public productId!: number;
    public categoryId!: string;
}

// Initializing the product-category relation model schema
const product_category_modelSchema: ModelAttributes<Product_Category_model, Product_Category_attributes> = {
    productId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "products",
            key: "product_id"
        }
    },
    categoryId: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        references: {
            model: "categories",
            key: "category_id"
        }
    }
}
Product_Category_model.init(product_category_modelSchema, {
    sequelize,
    tableName: "products_categories",
    modelName: "Product_Category",
    timestamps: false,
    underscored: true
});

// Associating with the product model and the category model
ProductModel.belongsToMany(CategoryModel, {
    through: Product_Category_model,
    as: "categories",
    foreignKey: "product_id",
    otherKey: "category_id"
});
CategoryModel.belongsToMany(ProductModel, {
    through: Product_Category_model,
    as: "products",
    foreignKey: "category_id",
    otherKey: "product_id"
});

export default Product_Category_model;
export { Product_Category_attributes, product_category_modelSchema };