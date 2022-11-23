// INTRODUÇÃO

import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async(req: Request,res: Response): Promise<void> =>{
   let statusCode=400

   try {
      const users = await connection("aula48_exercicio")

      if(users.length < 1){
         res.statusCode = 404
         throw new Error("No users found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
