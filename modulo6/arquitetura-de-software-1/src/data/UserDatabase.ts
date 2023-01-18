import { BaseDatabase } from "./BaseDatabase";
import { userTypes } from "../types/userTypes";

export class UserDatabase extends BaseDatabase {
  insertUser = async (user: userTypes): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  async get(): Promise<userTypes[]> {

    try {

        const users: userTypes[] = [];

        const result = await BaseDatabase.connection()
            .select("*")
            .from('User_Arq');

        for(let user of result){
            users.push(user);
        }

        return users;

    } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
    }
};
public async delUser(id:string): Promise<void> {

  try {
    await BaseDatabase.connection()
      .where({id})
      .from('User_Arq')
      .delete()
  } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
}