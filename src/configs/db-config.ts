// Development environment
const development = {
    username: "root",
    password: "",
    database: "e_antsena",
    host: "localhost",
    dialect: "mysql",
    pool: {
        min: 0,
        max: 5,
        acquire: 30000,
        idle: 10000
    }
}

export { development };