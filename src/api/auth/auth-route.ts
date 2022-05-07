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
router.get("/token-user", authRouteUser("refresh"), authController.authenticateUserFromToken);

// Access token renewal from refresh token
router.get("/token", authRouteUser("refresh"), authController.accessTokenRenewal);

// User logout
router.delete("/logout", authRouteUser("refresh"), authController.userLogout);

/*****************************************************************************/


export default router;
