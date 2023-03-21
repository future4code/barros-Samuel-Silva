import { UserRepository } from "../../src/business/UserRepository";
import { User } from "../../src/model/user";
import { userMock } from "../mocks/UserMock"

export class UserDatabaseMock implements UserRepository {
  public async getUserById(id: string): Promise<User | undefined> {
    return id === "id_mock_admin" ? userMock : undefined
  }
  public async getAllUsers(): Promise<User[]> {
    return []
  }

}