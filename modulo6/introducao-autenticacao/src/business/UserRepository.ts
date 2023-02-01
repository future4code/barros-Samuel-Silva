import {user} from "../model/user";

export interface UserRepository {
    insertUser(user:user): unknown;
    getUser(id:string): Promise<user[]>
}