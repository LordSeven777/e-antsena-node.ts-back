import http from "http";

// Express rest api app
import app from "./app";

// HTTP server
const server = http.createServer(app);

// Listening to a port
const PORT: number | string = process.env.PORT || 5000;
server.listen(PORT, () => { console.log(`API server running on port ${PORT} ...`); });