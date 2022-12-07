//EXERCICIO 4

// Crie um último endpoint que possua todas as funcionalidades acima (as duas filtragens, a ordenação e a paginação). 
// Atribua valores padrão para filtragem, ordenação e paginação para que:

import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUserTotal = async(req: Request,res: Response): Promise<void> =>{

   let statusCode=400

   try {
      let name = req.query.name
      let type = req.query.type as string
      let sort = req.query.sort as string       
      let order = req.query.order as string     
      let size = 5     
      let page = Number(req.query.page)
         
      // - Caso o usuário não forneça parâmetro de filtragem, o endpoint busque todos os users;

      if(!name){
         name = "%"
      }
   
      
      if(!type){
         type = "%"
      }

      // - Caso o usuário não forneça parâmetro de ordenação, o endpoint ordene por nome em ordem decrescente;

      if (!order) {         
         order = "name", sort="DESC"
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

      // - Caso o usuário não forneça número de página, deve começar na página 1

      if (isNaN(page) || page < 1) {                  
         page = 1                                     
      }
   
      let offset = size * (page - 1)                     

      const users = await connection("aula48_exercicio")

      .where("name","like",`%${name}%`)
      .where("type","like",`%${type}%`)
      //const usersPage = await connection("aula48_exercicio")
         .orderBy(order, sort)                           
         .limit(size)                                    
         .offset(offset)                                 

      res.status(200).send(users)
      
   } catch (error:any) {
      console.log(error)
      res.status(statusCode).send(error.message)
   }
}
