import path from "path";
import express from "express";

// Error handler middleware
import errorHandlerMiddleware from "./middlewares/errorHandler-middle";

// API routes
import * as APIroutes from "./api";

// Express app
const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* ROUTES *********************************************************************/

// Static files
app.use("/public", express.static(path.join(__dirname, "../", "static")));

// API auth route
app.use("/api/auth", APIroutes.authRoute);

// Users api route
app.use("/api/users", APIroutes.usersRoute);

/*****************************************************************************/


// Error handler middleware
app.use(errorHandlerMiddleware);

export default app;