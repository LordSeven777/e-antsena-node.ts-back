import { Router } from "express";

// Users controller
import usersController from "./users-controller";

// Router app
const router = Router();

router.get("/", (req, res) => {
    res.send("Users!");
});

export default router;