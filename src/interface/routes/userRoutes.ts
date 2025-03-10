// src/interface/routes/userRoutes.ts
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { authenticateToken } from "../middleware/auth";

const router = Router();

const userController = new UserController();

router.get("/", (req, res) => userController.getAll(req, res));

export { router as userRoutes };


