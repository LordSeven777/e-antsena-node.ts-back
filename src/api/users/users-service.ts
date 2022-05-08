import { Sequelize, Op, WhereOptions, Order, Optional } from "sequelize";
import bcrypt from "bcrypt";

// Models
import UserModel, { UserAttributes, UserCreationAttributes } from "./user-model";
import { ShopModel } from "../shops";

// Service get ops options interface
import ServiceGetOptions from "../../types/ServiceGetOptions-interface";

// Type for user attributes without password
type UserAttributesWoutPassword = Optional<UserAttributes, "password">;

// Type for all user's attributes as optionals
type UserOptionalAttributes = {
    [Property in keyof UserAttributes]?: UserAttributes[Property]
}

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


    // Gets a user from database **********************************************
    async getUser(userId: string | number, isTrusted: boolean = false) {
        // Excuded fields
        const excludedFields = ["password"];
        if (!isTrusted) excludedFields.push("role", "email");

        return await UserModel.findOne({
            attributes: {
                exclude: excludedFields
            },
            where: { userId }
        });
    }


    // Checks if an email address already exists in database ******************
    async checkIfEmailExists(email: string): Promise<boolean> {
        return await UserModel.count({ where: { email } }) > 0;
    }


    // Saves a user to the database *******************************************
    async saveUser(user: UserCreationAttributes) {
        // Hashing the password
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds);

        // Insertion to db
        const addedUser = await UserModel.create(user);

        return (addedUser.toJSON() as UserAttributesWoutPassword);
    }


    // Finds a user by email and password *************************************
    async findUserByEmailAndPassword(email: string, password: string): Promise<UserAttributesWoutPassword | null> {
        const userHavingEmail = await UserModel.findOne({ where: { email } });
        if (!userHavingEmail) return null;
        if (!await bcrypt.compare(password, userHavingEmail.password)) return null;
        return ({ ...userHavingEmail.toJSON() } as UserAttributesWoutPassword);
    }


    // Gets a user's shop *****************************************************
    async getUserShop(userId: number) {
        return await ShopModel.findOne({ where: { ownerId: userId } });
    }


    // Edits a user's data in database ****************************************
    async editUser(userId: string | number, userData: UserOptionalAttributes): Promise<UserModel | null> {
        const user = await UserModel.findByPk(userId, {
            attributes: { exclude: ["password"] } // Password field omitted for security reasons
        });
        if (!user) return null;

        if (userData.firstname) user.firstname = userData.firstname;
        if (userData.lastname) user.lastname = userData.lastname;
        if (userData.gender) user.gender = userData.gender;
        if (userData.email) user.email = userData.email;
        if (userData.password) {
            const saltRounds = 10;
            user.password = await bcrypt.hash(userData.password, 10);
        }

        // Saving changes in db
        await user.save();

        return user;
    }

}

export default new UsersService();