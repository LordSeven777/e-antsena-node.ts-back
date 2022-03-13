import { Model, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { ProductModel } from "../products";
import { CategoryModel } from "../categories";
import { UserModel } from "../users";
 
// Interface for the product-category relation attributes
interface ProductsCategoriesAttributes {
    product_id: number;
    category_id: string;
}

// Class for the product-category relation model
class ProductsCategoriesModel extends Model<ProductsCategoriesAttributes> implements ProductsCategoriesAttributes {
    public product_id!: number;
    public category_id!: string;
}

// Initializing the product-category relation model schema
const productsCategoriesModelSchema: ModelAttributes<ProductsCategoriesModel, ProductsCategoriesAttributes> = {
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "products",
            key: "product_id"
        }
    },
    category_id: {
        type: DataTypes.STRING(30),
        primaryKey: true,
        references: {
            model: "categories",
            key: "category_id"
        }
    }
}
ProductsCategoriesModel.init(productsCategoriesModelSchema, {
    sequelize,
    tableName: "products_categories",
    modelName: "ProductsCategories",
    timestamps: false
});

// Associating with the product model and the category model
ProductModel.hasMany(ProductsCategoriesModel, {
    as: "products_categories_rel",
    foreignKey: "product_id"
});
ProductsCategoriesModel.belongsTo(ProductModel, {
    as: "product",
    foreignKey: "product_id"
});
CategoryModel.hasMany(ProductsCategoriesModel, {
    as: "categories_products_rel",
    foreignKey: "category_id"
});
ProductsCategoriesModel.hasMany(CategoryModel, {
    as: "category",
    foreignKey: "category_id"
});
ProductModel.belongsToMany(CategoryModel, {
    through: ProductsCategoriesModel,
    as: "categories",
    foreignKey: "product_id",
    otherKey: "category_id"
});
CategoryModel.belongsToMany(ProductModel, {
    through: ProductsCategoriesModel,
    as: "products",
    foreignKey: "category_id",
    otherKey: "product_id"
});

export default ProductsCategoriesModel;
export { ProductsCategoriesAttributes, productsCategoriesModelSchema };