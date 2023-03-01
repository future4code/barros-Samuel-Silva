import { CustomError } from "../error/CustomError";
import { InsertUserInputDTO} from "../model/userDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

   private userTable = 'Architecture_User'

   public insertUser = async (user: InsertUserInputDTO) => {
      try {
         UserDatabase.connection.initialize()
         await UserDatabase.connection(this.userTable)
            .insert(user)

      } catch (error: any) {
         throw new CustomError(error.statusCode, error.message)
      } finally {
         UserDatabase.connection.destroy();
      }

   }

}
