import { Model, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Other models
import { CategoryModel } from "../categories";
import { ShopModel } from "../shops";

// Interface for the shops_categories attributes
interface ShopsCategoriesAttributes {
    category_id: string;
    shop_id: number;
}

// Class for the shops_categories model
class ShopsCategoriesModel extends Model<ShopsCategoriesAttributes> implements ShopsCategoriesAttributes {
    public category_id!: string;
    public shop_id!: number;
}

// Initializing the shops_categories model schema
const shopsCategoriesModelSchema: ModelAttributes<ShopsCategoriesModel, ShopsCategoriesAttributes> = {
    shop_id: {
        type: DataTypes.INTEGER.UNSIGNED.ZEROFILL,
        primaryKey: true,
        references: {
            model: "shops",
            key: "shop_id"
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
ShopsCategoriesModel.init(shopsCategoriesModelSchema, {
    sequelize,
    tableName: "shops_categories",
    modelName: "ShopsCategories",
    timestamps: false
});

// Associating with the shop model and category model
ShopModel.hasMany(ShopsCategoriesModel, {
    as: "shop_category_rel",
    foreignKey: "shop_id"
});
ShopsCategoriesModel.belongsTo(ShopModel, {
    as: "shop",
    foreignKey: "shop_id"
});
CategoryModel.hasMany(ShopsCategoriesModel, {
    as: "category_shop_rel",
    foreignKey: "category_id"
});
ShopsCategoriesModel.belongsTo(CategoryModel, {
    as: "category",
    foreignKey: "category_id"
});
ShopModel.belongsToMany(CategoryModel, {
    through: ShopsCategoriesModel,
    as: "shops",
    foreignKey: "shop_id",
    otherKey: "category_id"
});
CategoryModel.belongsToMany(ShopModel, {
    through: ShopsCategoriesModel,
    as: "categories",
    foreignKey: "category_id",
    otherKey: "shop_id"
});

export default ShopsCategoriesModel;
export { ShopsCategoriesAttributes, shopsCategoriesModelSchema };