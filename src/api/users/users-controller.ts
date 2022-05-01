import { Request, Response, NextFunction } from "express";

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

}

export default new UsersController();