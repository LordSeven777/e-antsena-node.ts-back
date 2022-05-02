import { Sequelize, Op, WhereOptions, Order } from "sequelize";

// User model
import UserModel, { UserAttributes } from "./user-model";

// Service get ops options interface
import ServiceGetOptions from "../../types/ServiceGetOptions-interface";

// Type for searchable user attributes
type SearchabeUserAttributes = {
    [property in keyof UserAttributes]?: UserAttributes[property]
};

// Class for the users service
class UsersService {

    // Gets users from database under pagination ******************************
    async getPaginatedUsers(page: number = 1, limit: number = 10, options: ServiceGetOptions) {
        const { search, order } = options;

        // Filters
        const filters: WhereOptions = {};
        if (search) {
            filters[Op.or as unknown as string] = [
                { firstname: { [Op.substring]: search } },
                { lastname: { [Op.substring]: search } },
            ]
        }

        // Sorting
        const sortBy = options.sortBy !== "name"
            ? options.sortBy
            : Sequelize.fn("CONCAT", Sequelize.col("firstname"), Sequelize.col("lastname"))
        const sorting: Order = [[
            sortBy ? sortBy : "created_at",
            order ? order : "desc"
        ]];

        const paginatedUsers = await UserModel.findAndCountAll({
            // role, email, and password information are omitted for security reasons
            attributes: { exclude: ["email", "password", "role"] },
            where: filters,
            order: sorting,
            // Pagination options
            offset: (page - 1) * limit,
            limit
        });

        return paginatedUsers;
    }


    // Gets the first user having the specified fields from database **********
    async getUserHaving(searchableFields: SearchabeUserAttributes, isTrusted: boolean = false) {
        // Excuded fields
        const excludedFields = ["password"];
        if (!isTrusted) excludedFields.push("role", "email");

        return await UserModel.findOne({
            attributes: {
                exclude: excludedFields
            },
            where: searchableFields
        });
    }


    // Checks if an email address already exists ******************************
    async checkIfEmailExists(email: string): Promise<boolean> {
        return await UserModel.count({ where: { email } }) > 0;
    }

}

export default new UsersService();