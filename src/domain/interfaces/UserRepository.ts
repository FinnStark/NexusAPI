import { User } from "../entities/User";

export interface UserRepository {
  find(): Promise<User[]>;
  findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  create(user: User): Promise<User>;
  update(user: User): Promise<void>;
  delete(id: number): Promise<void>;
}