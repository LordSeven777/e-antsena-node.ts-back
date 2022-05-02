import http from "http";

// Express rest api app
import app from "./app";

// Database setups bootstrapper
import bootstrapDb from "./db";

// Redis database connection
import { connectToRedis } from "./redisClient";

// HTTP server
const server = http.createServer(app);

// Bootstrapping database setups
bootstrapDb();

// Connecting to redis
connectToRedis();

// Listening to a port
const PORT: number | string = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`Server running on port ${PORT} ...`); });