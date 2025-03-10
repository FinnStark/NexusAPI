// src/infrastructure/repositories/MockUserRepository.ts
import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/interfaces/UserRepository";
import fs from 'fs';

const JSON_FILE_PATH = './src/json/users.json';
export class MockUserRepository implements UserRepository {
  private users: User[] = [];

  async findAll(): Promise<User[]> {
    const data = await fs.promises.readFile(JSON_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  }

  async find(): Promise<User[]> {
    const data = await fs.promises.readFile(JSON_FILE_PATH, 'utf-8');
    return JSON.parse(data);
  }

  async findById(id: number): Promise<User | null> {
    return this.users.find(user => user._id === id) || null;
  }

  async create(user: User): Promise<User> {
    this.users.push(user);
    return user;
  }

  async update(user: User): Promise<void> {
    const index = this.users.findIndex(b => b._id === user._id);
    if (index !== -1) {
      this.users[index] = user;
    }
  }

  async delete(id: number): Promise<void> {
    this.users = this.users.filter(user => user._id !== id);
  }
}
