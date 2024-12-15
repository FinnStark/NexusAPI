import express from 'express';
import { getAllUsers } from '../controllers/userController';

const router = express.Router();

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
router.get('/', getAllUsers);

export default router;
