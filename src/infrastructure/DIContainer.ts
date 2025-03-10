// src/infrastructure/DIContainer.ts
import { MongoUserRepository } from "./repositories/MongoUserRepository";
import { GetAllUsers } from "../use-cases/GetAllUsers";

class DIContainer {
  private static _userRepository = new MongoUserRepository();

  static getUserRepository() {
    return this._userRepository;
  }

  static getGetAllUsersUseCase() {
    return new GetAllUsers(this.getUserRepository());
  }
}

export { DIContainer };
