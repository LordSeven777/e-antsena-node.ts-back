// Sequelize database connection instance
import sequelize from "./connection";

// The models syncer
import syncModelsWithDb from "./syncing";

// Interface for the synchronization option
interface SyncOption {
    force?: boolean;
    alter?: boolean;
}

// Bootstraps the database setups
const bootstrapDb = async (withSeeding: boolean = false, syncOption: SyncOption = { force: false }) => {
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
        // Syncing with the database
        try {
            await syncModelsWithDb(syncOption);
            console.log('Resynced with the MySQL database ...');
        }
        catch (error: any) {
            console.log('Failed to resync with MySQL database ...');
            console.log(error.message);  
        }
    }
}

export default bootstrapDb;