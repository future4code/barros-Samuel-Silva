import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {

    constructor(private userBusiness: UserBusiness) { }

// BUSCAR POR ID

    public getUserById = async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            const users = await this.userBusiness.getUserById(id)

            res.status(200).send(users)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };

//BUSCA TODOS OS USUARIOS

    public getAllUsers = async (req: Request, res: Response): Promise<void> => {
        try {
            const users = await this.userBusiness.getAllUsers()

            res.status(201).send(users)
        } catch (error: any) {
            res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
        }
    };

}