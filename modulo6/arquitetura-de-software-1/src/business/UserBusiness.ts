import { UserDatabase } from "../data/UserDatabase";
import { userTypes } from "../types/userTypes";

export class UserBusiness {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;

      if (!name || !email || !password) {
        throw new Error(
          'Preencha todos os dados.'
        );
      }

      if (password.length < 4) {
        throw new Error("A senha deve ter no mínimo 4 dígitos.");
      }

      const id: string = Date.now().toString();

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser({
        id,
        name,
        email,
        password,
      });
    } catch (error:any) {
        throw new Error(error.message)
    }
  };
  async get(): Promise<userTypes[]>  {
				
    return await new UserDatabase().get();
};
async delUser (input: {id:string}) {
    if (!input.id) {
      throw new Error ('Preencha o id do usuário.')
    }  
   return await new UserDatabase().delUser(input.id);
  };
}

