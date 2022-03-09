// Sequelize database connection instance
import sequelize from "./connection";

// Bootstraps the database setups
const bootstrapDb = async (withSeeding: boolean = false) => {
    // Authenticating with the database
    try {
        await sequelize.authenticate();
        console.log('Connected to MySQL database ...');
    }
    catch (error: any) {
        console.log('Failed to connect to MySQL database ...');
        console.log(error.message);
    }
}

export default bootstrapDb;