// All models and mock data
import { UserModel, usersMock } from "../api/users";
import { ShopModel, shopsMock } from "../api/shops";

// Seeds all tables with mock data
const seedTables = async () => {
    await UserModel.bulkCreate(usersMock);
    await ShopModel.bulkCreate(shopsMock);
}

export default seedTables;