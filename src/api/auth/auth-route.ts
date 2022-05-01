import { Router } from "express"

// Auth controller
import authController from "./auth-controller";

// Router app
const router = Router();

router.get("/", (req, res) => {
    res.send("Authentication - Authorization");
});

export default router;
