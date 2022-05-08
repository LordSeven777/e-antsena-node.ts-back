import { Router } from "express";

// Users controller
import usersController from "./users-controller";

// Middlewares
import { authRouteUser, requireAuthenticUserFromParam } from "../../middlewares/routeAuth-middle";
import { validateUserIdentityData } from "../../middlewares/validations/users-validations";

// Router app
const router = Router();


/* ROUTES ********************************************************************/

// Gets users under pagination
router.get("/", usersController.getPaginatedUsers);

// Gets a user
router.get("/:userId", usersController.getUser);

// Edits a user's identity
router.put("/:userId", authRouteUser(), requireAuthenticUserFromParam, validateUserIdentityData, usersController.editUserIdentity);

// Edits a user's email
router.patch("/:userId/email", authRouteUser(), requireAuthenticUserFromParam, usersController.editUserEmail);

/*****************************************************************************/


export default router;