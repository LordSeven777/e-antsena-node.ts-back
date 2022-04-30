import path from "path";
import express from "express";

// Error handler middleware
import errorHandlerMiddleware from "./middlewares/errorHandler-middle";

// Express app
const app = express();

app.get("/", (req, res, next) => {
    res.send("Echo!");
});


/* ROUTES *********************************************************************/

// Static files
app.use("/public", express.static(path.join(__dirname, "../", "static")));

/*****************************************************************************/


// Error handler middleware
app.use(errorHandlerMiddleware);

export default app;