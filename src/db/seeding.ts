// All models and mock data
import { UserModel, usersMock } from "../api/users";

// Seeds all tables with mock data
const seedTables = async () => {
    await UserModel.bulkCreate(usersMock);
}

export default seedTables;