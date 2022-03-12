import { SyncOptions } from "sequelize";

// Sequelize database connection instance
import sequelize from "./connection";

// The tables seeder
import seedTables from "./seeding";

// Bootstraps the database setups
const bootstrapDb = async (withSeeding: boolean = false, syncOption: SyncOptions = { force: false }) => {
    // Authenticating with the database
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database ...');
    }
    catch (error: any) {
        console.log('Failed to connect to MySQL database ...');
        console.log(error.message);
    }

    if (syncOption?.force || syncOption?.alter) {
        // Syncing all models with the database
        try {
            await sequelize.sync(syncOption);
            console.log('Resynced with the MySQL database ...');
        }
        catch (error: any) {
            console.log('Failed to resync with MySQL database ...');
            console.log(error.message);  
        }

        // Seeding all tables
        try {
            await seedTables();
            console.log("Seeded all tables ...");    
        }
        catch (error: any) {
            console.log("Failed to seed all tables ...");
            console.log(error.message);
        }
    }
}

export default bootstrapDb;