import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDatabase} from "../data/UserDatabase";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const { email, name, password } = req.body;
      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  //Metodo GET
  
  public get = async (req: Request, res: Response) => {
    try {
      const userDatabase = new UserDatabase()
      const users = await userDatabase.get()
      res.status(200).send(users)
    } catch (error: any) {
        throw new Error(error.message)
    }
  }
}
