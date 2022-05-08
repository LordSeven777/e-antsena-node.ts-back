import { Request, Response, NextFunction } from "express";

// Response error helper
import ResponseError from "../helpers/ResponseError-helper";

// Token type
import TokenType from "../types/TokenType-type";

import { authService } from "../api/auth";

// Authenticates and only authorizes users having valid tokens
const authRouteUser = (tokenType: TokenType = "access", isRequired: boolean = true) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers['authorization']?.split(' ')[1];

        // Missing token verification
        if (!token && isRequired)
            return next(new ResponseError(401, `${tokenType} token is required`));

        // If refresh token - Refresh token verification
        if (tokenType === "refresh" && token && !authService.checkIfRefreshTokenExists(token))
            return next(new ResponseError(401, `Refresh token is no longer usable`));

        let userPayload;
        if (token) {
            try {
                // Token verification/deserialization
                userPayload = await authService.verifyUserToken(token, tokenType);
            }
            catch (error) {
                return next(new ResponseError(401, `${tokenType}-token is is not valid`));
            }
        }

        // Saving the user payload and the inside the response object's locals
        res.locals.authUser = token ? userPayload : null;
        res.locals.token = token || null;

        next();
    }
}

/* Middlewares that verifies the authenticated user's authenticity
** in regards to the requested user id in request params */
const requireAuthenticUserFromParam = (req: Request, res: Response, next: NextFunction) => {
    const { authUser } = res.locals;
    const { userId } = req.params;

    /* The userId param must exist */
    if (!userId) return next(new ResponseError(400, "user id parameter is not specified"));

    /* The user must be authenticated from an access token */
    if (!authUser) return next(new ResponseError(401, "Access-token is required"));

    /* The authenticated user id and the user id specified in params must be the same */
    if (authUser.userId !== parseInt(userId))
        return next(new ResponseError(403, "Permission to request this resource is denied"));

    next();
}

export { authRouteUser, requireAuthenticUserFromParam };