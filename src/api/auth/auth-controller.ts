import { Request, Response, NextFunction } from "express";

// Services
import authService from "./auth-service";
import { usersService } from "../users";

// Class for the auth controller
class AuthController {

    // User signup
    async userSignup(req: Request, res: Response, next: NextFunction) {
        try {
            // Token verification test
            const payload = { name: "John" };
            const accessToken = await authService.generateUserToken(payload, "access");
            const refreshToken = await authService.generateUserToken(payload, "refresh");
            const accessPayload = await authService.verifyUserToken(accessToken, "access");
            const refreshPayload = await authService.verifyUserToken(refreshToken, "refresh");
            console.log(`Access: ${accessToken}`, `Refresh: ${refreshToken}`);
            console.log(accessPayload, refreshPayload);

            res.send("user signed up");
        }
        catch (error) {
            next(error);
        }
    }

}

export default new AuthController();