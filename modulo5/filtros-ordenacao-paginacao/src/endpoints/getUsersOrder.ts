// EXERCICIO 2

// Faça uma cópia do endpoint original, e adicione a ele a funcionalidade de ordenação que possa receber nome ou tipo de user. 
// A ordenação padrão deve ser crescente, e caso o usuário não passe nenhum parâmetro, a ordenação deve ser por email.

import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUsersOrder = async(req: Request,res: Response): Promise<void> =>{
   let statusCode=400

   try {
   
      let sort = req.query.sort as string       
      let order = req.query.order as string     
      let size = Number(req.query.size)        
      let page = Number(req.query.page)            

      if (!order) {         
         order = "email"
      }

      if (order === "name") {  
         order = "name"       
      }

      if (order === "type") {  
         order = "type"  
      }
      
      if (order !== "name" && order !== "type") {  
         order = "email"                               
      }
         
      const users = await connection("aula48_exercicio")
         .orderBy(order, sort)                          
      
      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
}
