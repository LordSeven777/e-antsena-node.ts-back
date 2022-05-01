import { Request, Response, NextFunction } from "express";

// Services
import authService from "./auth-service";
import { usersService } from "../users";

// Class for the auth controller
class AuthController {

    // User signup
    async userSignup(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("user signed up");
        }
        catch (error) {
            next(error);
        }
    }

}

export default new AuthController();