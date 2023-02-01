import { CustomError } from "../error/customError";
import { GetUserInput, user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public insertUser = async (user: user) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          email: user.email,
          password: user.password,
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

//Exercício 4

//a)
  
  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection("Auth_users")
      .select()
      .where({email})
      
      return result[0]
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  
//Exercício 7

//a)

public getUser = async (id:string): Promise<user[]> => {
  try {
    const user = await UserDatabase.connection
      .select("*") 
      .from("Auth_users")
      .where({id:id})
      return user;  
  } catch (error: any) {
     throw new CustomError(error.statusCode, error.message)

  }
  }
}
