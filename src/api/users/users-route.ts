import { Router } from "express";

// Users controller
import usersController from "./users-controller";

// Router app
const router = Router();

// Gets users under pagination
router.get("/", usersController.getPaginatedUsers);

export default router;