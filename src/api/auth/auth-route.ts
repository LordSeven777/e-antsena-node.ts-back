import { Router } from "express"

// Auth controller
import authController from "./auth-controller";

// Router app
const router = Router();


/* ROUTES ********************************************************************/

// User signup
router.get("/signup", authController.userSignup);

/*****************************************************************************/


export default router;
