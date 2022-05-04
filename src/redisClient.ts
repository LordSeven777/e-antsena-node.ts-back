import path from "path";
import { createClient } from "redis";
import dotenv from "dotenv";

// Accessing environment variables (for local development)
dotenv.config({ path: path.join(__dirname, "../", ".env") });

// The redis endpoint options based on the environment
const endpointOptions = process.env.REDIS_ENDPOINT_URL
    ? {
        url: `redis://${process.env.REDIS_ENDPOINT_URL}`,
        password: process.env.REDIS_PASSWORD
    }
    : undefined; // Defaults to localhost when undefined

// Creating a redis client
const redisClient = createClient(endpointOptions);

// Connects to the redis database
async function connectToRedis() {
    try {
        await redisClient.connect();
        console.log(`Connected to Redis ...`);
    }
    catch (error: any) {
        console.log(`Failed to connect to Redis ...`, error.message);
    }
}

export default redisClient;
export { connectToRedis };