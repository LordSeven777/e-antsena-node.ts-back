import express, { Request, Response, NextFunction } from "express";

// Error handler middleware
import errorHandlerMiddleware from "./middlewares/errorHandler-middle";

// Express app
const app = express();

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world');
})

// Error handler middleware
app.use(errorHandlerMiddleware);

export default app;