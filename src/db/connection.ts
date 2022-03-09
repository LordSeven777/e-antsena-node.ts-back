import { Sequelize, Dialect } from "sequelize";

// Environment configurations
import * as envConfigs from "../configs/db-config";

// Applied environment
const currentEnv = "development";
// Applied configuration
const config = envConfigs[currentEnv];

// Sequelize database connection instance
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: (config.dialect as Dialect),
    pool: config.pool
});

export default sequelize;