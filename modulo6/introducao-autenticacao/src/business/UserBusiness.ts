import { UserDatabase } from "../data/UserDatabase";
import { CustomError, InvalidEmail, InvalidPassword, UserNotFound } from "../error/customError";
import { UserInputDTO, user, LoginInputDTO, GetUserInputDTO,} from "../model/user";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UserRepository } from "./UserRepository";

const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

//Exercício 3

//a)

export class UserBusiness {
 
  constructor(private userDatabase:UserRepository) {}

  public signup = async (input: UserInputDTO) => {
    try {
      const {  email, password } = input;

      if ( !email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos  "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      if (password.length < 6) {
        throw new InvalidPassword();
      }

      const id: string = idGenerator.generateId();

      const user: user = {
        id,
        email,
        password,
      };

      const userDatabase = new UserDatabase();
      await userDatabase.insertUser(user);

      const token = authenticator.generateToken({id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

//Exercício 5

//a)

  public login = async (input: LoginInputDTO) => {
    try {
      const { email, password } = input;


//Exercício 5

//b)

      if (!email || !password) {
        throw new CustomError(
          400,
          'Preencha os campos "email" e "password"'
        );
      }

      if (!email.includes("@")) {
        throw new InvalidEmail();
      }

      const userDatabase = new UserDatabase();
      const user = await userDatabase.findUserByEmail(email);

      if(!user) {
        throw new UserNotFound()
      }

      if(user.password !== password) {
        throw new InvalidPassword()
      }

      const token = authenticator.generateToken({id: user.id})

      return token
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUser = async (id: string) => {

    try {      
    const userSelected = await this.userDatabase.getUser(id)

    if(!userSelected[0]){
      throw new CustomError(404, "User not found")
    }

    const result = {
      id:userSelected[0].id,
      email:userSelected[0].email
    }
    return userSelected;

    } catch (error: any) {
       throw new CustomError(error.statusCode, error.message)

    }
 
  }
}
