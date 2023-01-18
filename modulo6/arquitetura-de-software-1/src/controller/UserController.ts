import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness()
      await userBusiness.createUser(input)

      res.status(201).send({ message: "Usuário criado com sucesso!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  async get(req: Request, res: Response) : Promise<void>  {	
    try {

        const users = await new UserBusiness().get();

        res.send(users).status(200);

    } catch (error:any) {
        res.send({ message: error.message }).status(error.status);
    }
}
delUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const input = {id: req.params.id};

    await new UserBusiness().delUser(input)

    res.status(201).send({ message: "Usuário excluído!" });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
};
}