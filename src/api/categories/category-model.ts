import { Model, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Interface for the category attributes
interface CategoryAttributes {
    categoryId: string;
    label: string;
}

// Class for the category model
class CategoryModel extends Model<CategoryAttributes> implements CategoryAttributes {
    public categoryId!: string;
    public label!: string;
}

// Initializing the category model schema
const categoryModelSchema: ModelAttributes<CategoryModel, CategoryAttributes> = {
    categoryId: {
        type: DataTypes.STRING(30),
        primaryKey: true
    },
    label: {
        type: DataTypes.STRING(30),
        unique: true
    }
}
CategoryModel.init(categoryModelSchema, {
    sequelize,
    tableName: "categories",
    modelName: "Category",
    timestamps: false,
    underscored: true
});

export default CategoryModel;
export { CategoryAttributes, categoryModelSchema };