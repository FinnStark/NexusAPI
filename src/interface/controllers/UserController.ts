// src/interface/controllers/UserController.ts
import { Request, Response } from "express";
import { DIContainer } from "../../infrastructure/DIContainer";
import { CreateUserDto } from "../dto/CreateUserDto";
import { validate } from "class-validator";

export class UserController {
  private getAllUsers = DIContainer.getGetAllUsersUseCase();

  async getAll(req: Request, res: Response) {
    const users = await this.getAllUsers.execute();
    res.json(users);
  }
  async create(req: Request, res: Response){
    const dto = Object.assign(new CreateUserDto(), req.body);
    const errors = await validate(dto);

    if (errors.length > 0){
      return res.status(400).json({ errors });
    }

    // proceed with the creation logic...
  }
}
