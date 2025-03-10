// src/infrastructure/repositories/MongoUserRepository.ts
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";
import { UserModel } from "../models/UserModel";

export class MongoUserRepository implements UserRepository {
  async findAll(): Promise<User[]> {
    return await UserModel.find();
  }

  async find(): Promise<User[]> {
    return await UserModel.find().select("-password");
  }

  async findById(id: number): Promise<User | null> {
    return await UserModel.findById(id);
  }

  async create(user: User): Promise<User> {
    const newUser = new UserModel(user);
    await newUser.save();
    return newUser;
  }

  async update(user: User): Promise<void> {
    await UserModel.findByIdAndUpdate(user._id, user);
  }

  async delete(id: number): Promise<void> {
    await UserModel.findByIdAndDelete(id);
  }
}
