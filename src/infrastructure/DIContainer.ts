// src/infrastructure/DIContainer.ts
import { MockUserRepository } from "./repositories/MockUserRepository";
import { GetAllUsers } from "../use-cases/GetAllUsers";

// Dependency Injection
class DIContainer {
  private static _userRepository = new MockUserRepository();

  static getUserRepository() {
    return this._userRepository;
  }

  static getGetAllUsersUseCase() {
    return new GetAllUsers(this.getUserRepository());
  }
}

export { DIContainer };
