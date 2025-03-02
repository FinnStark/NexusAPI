// src/interface/controllers/UserController.ts
import { Request, Response } from "express";
import { GetAllUsers } from "../../use-cases/GetAllUsers";

export class UserController {
  constructor(private getAllUSers: GetAllUsers) {}

  async getAll(req: Request, res: Response) {
    const users = await this.getAllUSers.execute();
    res.json(users);
  }
}
