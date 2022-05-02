import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

// Type for an express middleware
type ExpressMiddleware = ((req: Request, res: Response, next: NextFunction) => void) | ErrorRequestHandler;

export default ExpressMiddleware;