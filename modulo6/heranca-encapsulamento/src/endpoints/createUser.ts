import { Request, Response } from "express"
import connection from "../database/connection"
import { users } from "../database/data"
import { TABLE_USERS } from "../database/tableNames"
import { User } from "../models/User"
import dotenv from "dotenv"
import { UserDataBase } from "../database/UserDataBase"

export const createUser = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const email = req.body.email
        const password = req.body.password

        if (!email || !password) {
            throw new Error("Body inválido.")
        }

        // const newUser: User = {
        //     id: Date.now().toString(),
        //     email,
        //     password
        // }

        const user = new User(
            Date.now().toString(),
            email,
            password
        )

        UserDataBase.createUser(user)


        // await connection(TABLE_USERS).insert({
        //     id: user.getId(),
        //     email: user.getEmail(),
        //     password: user.getPassword()
        // })
        
        res.status(201).send({ message: "Usuário criado", user: user })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}