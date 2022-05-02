import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

// Response error helper
import ResponseError from "./ResponseError-helper";

// Express middleware type
import ExpressMiddleware from "../types/ExpressMiddleware-type";

// Basic express validation error handler
const expressValidationErrorHandler = (errorMessage: string = "Validation failed") => {
    return (req: Request, res: Response, next: NextFunction) => {
        // Extraction of the validation errors
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            // Throwing a bad request error
            return next(new ResponseError(400, errorMessage, errors.array()));
        }

        next();
    }
}

// Express validation wrapper
const expressValidationWrapper = (validationMiddlewares: ExpressMiddleware[], errorMessage?: string): ExpressMiddleware[] => [
    ...validationMiddlewares,
    expressValidationErrorHandler(errorMessage)
];

export default expressValidationWrapper;