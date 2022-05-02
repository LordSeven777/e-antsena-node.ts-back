import { Router } from "express"

// Auth controller
import authController from "./auth-controller";

// Middlewares
import { validateSignupUser } from "../../middlewares/validations/auth-validations";

// Router app
const router = Router();


/* ROUTES ********************************************************************/

// User signup
router.get("/signup", validateSignupUser, authController.userSignup);

/*****************************************************************************/


export default router;
