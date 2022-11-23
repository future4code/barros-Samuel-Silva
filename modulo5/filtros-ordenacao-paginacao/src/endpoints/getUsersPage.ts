// EXERCICIO 3

// Gere uma cópia do endpoint original, e faça com que ele exiba apenas 5 users por vez, e permita que o usuário possa passar a página que deseja ver.
// O número da página deve ser passado por query params.

import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersPage = async(req: Request,res: Response): Promise<void> =>{
   let statusCode=400
  

   try {
      let size = 5     
      let page = Number(req.query.page)        

      if (isNaN(page) || page < 1) {                  
         page = 1                                     
      }

      let offset = size * (page - 1)                   

      const users = await connection("aula48_exercicio")
         .limit(size)                                    
         .offset(offset)    
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
