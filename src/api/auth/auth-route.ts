import { Router } from "express"

// Auth controller
import authController from "./auth-controller";

// Middlewares
import { validateSignupUser, validateLoginCredentials } from "../../middlewares/validations/auth-validations";
import { authRouteUser } from "../../middlewares/routeAuth-middle";

// Router app
const router = Router();


/* ROUTES ********************************************************************/

// User signup
router.post("/signup", validateSignupUser, authController.userSignup);

// User login
router.post("/login", validateLoginCredentials, authController.userLogin);

// User authentication from token
router.get("/token-user", authRouteUser(), authController.authenticateUserFromToken);

/*****************************************************************************/


export default router;
