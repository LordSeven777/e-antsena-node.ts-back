import { SyncOptions } from "sequelize";

// Models
import { UserModel } from "../api/users";

// Syncs all models with the database tables
const syncModelsWithDb = async (syncOption: SyncOptions) => {
    await UserModel.sync(syncOption);
}

export default syncModelsWithDb;