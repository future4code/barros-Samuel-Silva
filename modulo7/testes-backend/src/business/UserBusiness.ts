import { UserDatabase } from "../data/mySQL/UserDatabase";
import { CustomError, InvalidEmail, InvalidName, InvalidPassword, InvaliRole, Unauthorized, UserNotFound } from "../error/customError";
import { User } from "../model/user";
import { UserRepository } from "./UserRepository";


export class UserBusiness {
 constructor(private userDatabase: UserRepository){}
 
    //BUSCA USUARIO POR ID

    public async getUserById(id: string){

        const user = await this.userDatabase.getUserById(id);
    
        if (!user) {
          throw new CustomError(404, "User not found");
        }
    
        return {
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          role: user.getRole(),
        };
      }

 
// BUSCA TODOS OS USUARIOS

    public getAllUsers = async () => {
        try {
            return await this.userDatabase.getAllUsers();

        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message)
        }
    }


}