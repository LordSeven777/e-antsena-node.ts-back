// Users route
import usersRoute from "./users-route";

// Users service
import usersService from "./users-service";

// User model
import UserModel, { UserAttributes, UserCreationAttributes, userModelSchema } from "./user-model";

// Mock data for users
import usersMock from "./users-mock";

export default usersRoute;
export {
    UserModel,
    UserAttributes,
    UserCreationAttributes,
    userModelSchema,
    usersMock,
    usersService
};