import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Response error helper
import ResponseError from "./ResponseError-helper";

// Express middleware type
import ExpressMiddleware from "../types/ExpressMiddleware-type";

// Basic express validation error handler
const expressValidationErrorHandler = (req: Request, res: Response, next: NextFunction) => {
    // Extraction of the validation errors
    const errors = validationResult(req);

    if (!errors.isEmpty())
        // Throwing a bad request error
        return next(new ResponseError(400, "Validation failed", errors.array()));

    next();
}

// Express validation wrapper
const expressValidationWrapper = (validationMiddlewares: ExpressMiddleware[]): ExpressMiddleware[] => [
    ...validationMiddlewares,
    expressValidationErrorHandler
];

export default expressValidationWrapper;