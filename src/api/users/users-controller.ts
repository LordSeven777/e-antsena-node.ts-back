import { Request, Response, NextFunction } from "express";

// Response error helper
import ResponseError from "../../helpers/ResponseError-helper";

// Users service
import usersService from "./users-service";

// Class for the users controller
class UsersController {

    // Gets paginated users
    async getPaginatedUsers(req: Request, res: Response, next: NextFunction) {
        try {
            const { search, sort_by, order } = req.query;

            // Options
            const page = req.query.page ? parseInt(req.query.page as string) : 1;
            const limit = req.query.limit ? parseInt(req.query.limit as string) : 10;

            const paginatedUsers = await usersService.getPaginatedUsers(page, limit, {
                search: search as string,
                sortBy: sort_by as string,
                order: order as "asc" | "desc"
            });

            res.json(paginatedUsers);
        }
        catch (error) {
            next(error);
        }
    }


    // Gets a user
    async getUser(req: Request, res: Response, next: NextFunction) {
        try {
            const { userId } = req.params;

            const user = await usersService.getUser(userId);

            if (!user)
                // 404 error
                return next(new ResponseError(404, `User having id = ${userId} is not found`));

            res.json(user);
        }
        catch (error) {
            next(error);
        }
    }


    // Edits a user's identity data
    async editUserIdentity(req: Request, res: Response, next: NextFunction) {
        try {
            res.send("User's indentity edidted");
        }
        catch (error) {
            next(error);
        }
    }

}

export default new UsersController();