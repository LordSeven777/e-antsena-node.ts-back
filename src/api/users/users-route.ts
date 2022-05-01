import { Router } from "express";

// Users controller
import usersController from "./users-controller";

// Router app
const router = Router();


/* ROUTES ********************************************************************/

// Gets users under pagination
router.get("/", usersController.getPaginatedUsers);

// Gets a user
router.get("/:userId", usersController.getUser);

/*****************************************************************************/


export default router;