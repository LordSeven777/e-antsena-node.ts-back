import path from "path";
import express from "express";

// Error handler middleware
import errorHandlerMiddleware from "./middlewares/errorHandler-middle";

// API routes
import * as APIroutes from "./api";

// Express app
const app = express();

app.get("/", (req, res, next) => {
    res.send("Echo!");
});


/* ROUTES *********************************************************************/

// Static files
app.use("/public", express.static(path.join(__dirname, "../", "static")));

// Users api route
app.use("/api/users", APIroutes.usersRoute);

/*****************************************************************************/


// Error handler middleware
app.use(errorHandlerMiddleware);

export default app;