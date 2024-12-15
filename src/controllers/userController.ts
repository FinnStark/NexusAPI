import { Request, Response } from 'express';
import { User, readUsersFromFile, writeUsersToFile } from '../models/userModel';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await readUsersFromFile();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los elementos', error });
    }
};
