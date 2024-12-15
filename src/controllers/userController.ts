import { Request, Response } from 'express';
import { User,  } from '../models/userModel';
import { readUsersFromFile, writeUsersToFile } from '../service/userService';

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await readUsersFromFile();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los elementos', error });
    }
};
