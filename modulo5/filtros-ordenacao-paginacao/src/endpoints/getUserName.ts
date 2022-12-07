//EXERCICIO 1

// a) Crie uma cópia do endpoint acima, e altere-o para que ele possa receber um parâmetro de filtragem por nome. 
// Este nome deve ser enviado por query params.

import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUserName = async(req: Request,res: Response): Promise<void> =>{

   let statusCode=400

   try {
      let name = req.query.name
      
      const users = await connection("aula48_exercicio").where("name","like",`%${name}%`)

      if(users.length < 1){
         res.statusCode = 404
         throw new Error("No name users found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.status(statusCode).send(error.message)
   }
}
