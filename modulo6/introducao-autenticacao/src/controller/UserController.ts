import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserRepository } from "../business/UserRepository";
import { LoginInputDTO, UserInputDTO } from "../model/user";

export class UserController {

  constructor(private userBusiness:UserBusiness){}

//Exercício 3

//a)
      public signup = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: UserInputDTO = {
            email,
            password,
          };
        //   const userBusiness = new UserBusiness()
          const token = await this.userBusiness.signup(input);
    
          res.status(201).send({ message: "token:", token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public login = async (req: Request, res: Response) => {
        try {
          const { email, password } = req.body;
    
          const input: LoginInputDTO = {
            email,
            password,
          };
        // const userBusiness = new UserBusiness()
          const token = await this.userBusiness.login(input);
    
          res.status(200).send({ token });
        } catch (error: any) {
          res.status(400).send(error.message);
        }
      };    

      public getUser = async (req: Request, res: Response):Promise<void> => {
    
        try {
          const id = req.params.id 
          console.log(id)
          
          const user = await this.userBusiness.getUser(id)
    
           res.status(201).send(user)
        } catch (error: any) {
           res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
      }
    
}
