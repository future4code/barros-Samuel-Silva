import { User } from "../model/user";

export interface UserRepository {
  getUserById(id: string): Promise<User | undefined>;
  getAllUsers(): Promise<User[]>;
}
