import express, { Request, Response, NextFunction } from "express";

// Express app
const app = express();

app.use('/', (req: Request, res: Response, next: NextFunction) => {
    res.send('hello world');
})

export default app;