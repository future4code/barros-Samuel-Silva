import express from "express"
import cors from 'cors'
import connection from "./database/connection"
import dotenv from "dotenv";

dotenv.config();

const app = express()

app.use(express.json())
app.use(cors())

import { Request, Response } from "express"

//EXERCICIO 1

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)

	return result[0][0]
}

// Assim a chamada funciona fora dos endpoints com .then()/.catch
getActorById("001")
	.then(result => {
		console.log(result)
	})
	.catch(err => {
		console.log(err)
	});

// Assim a chamada funciona fora dos endpoints com await
(async () => {
  console.log(await getActorById("001") )
})()


// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id
    
    console.log(await getActorById(id))

    res.end()
  } catch (error:any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) // bata no http://localhost:3003/users/001 e veja o que acontece no terminal


// a) Explique como é a resposta que temos quando usamos o raw. 
// Retorna todos os dados da tabela sem exeção

// b) Faça uma função que busque um ator pelo nome

app.get("/actor",async(req:Request, res:Response):Promise<void>=>{
  const name = req.body.name;
  let result;
  try{
      if (name){
          result=await connection.raw(
              `
                  SELECT * FROM Actor
                  WHERE name='${name}'
              `
          )
      }else{
          result=await connection.raw(
              `
                  SELECT * FROM Actor
              `
          )
      }
      res.status(200).send(result[0])
  }catch(error:any){
      console.log(error.message);
      
  }

  }
)

// c) Faça uma função que receba um gender retorne a quantidade de itens 
// na tabela Actor com esse gender. Para atrizes, female e para atores male.

app.get("/actor",async(req:Request, res:Response):Promise<void>=>{
  const gender = req.body.gender;
  let result;
  try{
      if (gender){
          result=await connection.raw(
              `
              SELECT COUNT(*) as count FROM Actor WHERE sex='${gender}'
              `);
          }else{
          result=await connection.raw(
              `
                  SELECT * FROM Actor
              `
          )
      }
      res.status(200).send(result[0][0].count)
  }catch(error:any){
      console.log(error.message);
      
  }

  }
)

// EXERCICIO 2

// a) Uma função que receba um salário e um id e realiza a atualização do salário do ator em questão
app.put("/actor/update",async(req :Request, res:Response):Promise<void>=>{
  const actorId=req.query.id
  const salary=req.query.salary
  try{
      if (!actorId){
              const erro=new Error("O id do ator não não informado!");
              erro.name="idActorNotFound";
              throw erro;
      }
      
      if (!salary){
          const erro=new Error("O novo salário não foi informado!");
          erro.name="salaryNotFound";
          throw erro;
      }
      await connection("Actor").update(
          {
              salary:salary
          }
      ).where(
          {
              id:actorId
          }
      )

      res.status(201).send("Dados atualizados com êxito")
  }catch(e:any){
      switch(e.name){
          case "idActorNotFound":
              res.status(401).send(e.message);
              break;
          case "salaryNotFound":
              res.status(422).send(e.message);
              break;
          default:
              res.status(500).send(e.message);
      
      }
  }
})


// b) Uma função que receba um id e delete um ator da tabela
app.delete("/actor/delete",async(req :Request, res:Response):Promise<void>=>{
  const actorId=req.query.id
  try{
      if (!actorId){
              const erro=new Error("O id do ator não não informado!");
              erro.name="idActorNotFound";
              throw erro;
      }
      
      await connection("Actor").delete()
        .where(
          {
              id:actorId
          }
      )

      res.status(201).send("Registro deletado com êxito")
  }catch(e:any){
      switch(e.name){
          case "idActorNotFound":
              res.status(401).send(e.message);
              break;
          default:
              res.status(500).send(e.message);
      
      }
  }
})

// c) Uma função que receba um gender e devolva a média dos salários de atrizes ou atores desse gender

app.get("/actor",async(req:Request,res:Response):Promise<void>=>{
  const gender=req.query.gender
  try{
      if (!gender){
              const erro=new Error("O grupo GENDER não foi informado!");
              erro.name="genderActorNotFound";
              throw erro;
      }
      
      const result=await connection("Actor").avg("salary as average")
        .where(
          {gender}
      )
      res.status(201).send(result[0].average)
  }catch(e:any){
      switch(e.name){
          case "genderActorNotFound":
              res.status(401).send(e.message);
              break;
          default:
              res.status(500).send(e.message);
      
      }
  }
})

//EXERCICIO 3


// a) Crie um endpoint com as especificações acima

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor)
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// b) Crie um endpoint agora com as seguintes especificações:
// Deve ser um GET (/actor)
// Receber o gênero como um query param (/actor?gender=)
// Devolver a quantidade de atores/atrizes desse gênero

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const count = await countActors(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err:any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

function countActors(arg0: string) {
  throw new Error("Function not implemented.");
}
