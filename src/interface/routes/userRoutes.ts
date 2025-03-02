// src/interface/routes/userRoutes.ts
import { Router } from "express";
import { MockUserRepository } from "../../infrastructure/repositories/MockUserRepository";
import { GetAllUsers } from "../../use-cases/GetAllUsers";
import { UserController } from "../controllers/UserController";

const router = Router();

const userRepository = new MockUserRepository();
const getAllUsers = new GetAllUsers(userRepository);
const userController = new UserController(getAllUsers);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Récupère la liste des utilisateurs
 *     responses:
 *       200:
 *         description: Liste des utilisateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: number
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   age:
 *                     type: string
 *                     example: 34
 *       400:
 *         description: Bad Request
 *       404:
 *         description: Not Found
 */
router.get("/users", (req, res) => userController.getAll(req, res));

export { router as userRoutes };
