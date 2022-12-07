//EXERCICIO 1

// b) Crie mais uma cópia do endpoint acima, e agora permita que haja filtragem por tipo de user.
// O tipo de user deve ser passado por path params.

import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUserType = async(req: Request,res: Response): Promise<void> =>{

   let statusCode=400

   try {
      let type = req.params.type as string
      
      const users = await connection("aula48_exercicio").where("type","like",`%${type}%`)

      if(users.length < 1){
         res.statusCode = 404
         throw new Error("No type found")
      }

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.status(statusCode).send(error.message)
   }
}
