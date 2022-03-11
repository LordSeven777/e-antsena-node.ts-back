import http from "http";

// Express rest api app
import app from "./app";

// Database setups bootstrapper
import bootstrapDb from "./db";

// HTTP server
const server = http.createServer(app);

// Bootstrapping database setups
bootstrapDb(false, { force: true });

// Listening to a port
const PORT: number | string = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`API server running on port ${PORT} ...`); });