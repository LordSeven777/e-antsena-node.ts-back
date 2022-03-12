import { Model, DataTypes, ModelAttributes } from "sequelize";

// Sequelize database connection instance
import sequelize from "../../db/connection";

// Interface for the category attributes
interface CategoryAttributes {
    category_id: string;
    label: string;
}

// Class for the category model
class CategoryModel extends Model<CategoryAttributes> implements CategoryAttributes {
    public category_id!: string;
    public label!: string;
}

// Initializing the category model schema
const categoryModelSchema: ModelAttributes<CategoryModel, CategoryAttributes> = {
    category_id: {
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
    timestamps: false
});

export default CategoryModel;
export { CategoryAttributes, categoryModelSchema };