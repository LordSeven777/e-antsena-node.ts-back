import { Model, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { CategoryModel } from "../categories";
import { ShopModel } from "../shops";

// Interface for a shop_category attributes
interface Shop_Category_attributes {
    categoryId: string;
    shopId: number;
}

// Class for the Shop_Category model
class Shop_Category_model extends Model<Shop_Category_attributes> implements Shop_Category_attributes {
    public categoryId!: string;
    public shopId!: number;
}

// Initializing the shops_categories model schema
const shop_category_modelSchema: ModelAttributes<Shop_Category_model, Shop_Category_attributes> = {
    shopId: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "shops",
            key: "shop_id"
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
Shop_Category_model.init(shop_category_modelSchema, {
    sequelize,
    tableName: "shops_categories",
    modelName: "Shop_Category",
    timestamps: false,
    underscored: true
});

// Association with the shop and category models
ShopModel.belongsToMany(CategoryModel, {
    through: Shop_Category_model,
    as: "categories",
    foreignKey: "shop_id",
    otherKey: "category_id"
});
CategoryModel.belongsToMany(ShopModel, {
    through: Shop_Category_model,
    as: "shops",
    foreignKey: "category_id",
    otherKey: "shop_id"
});

export default Shop_Category_model;
export { Shop_Category_attributes, shop_category_modelSchema };