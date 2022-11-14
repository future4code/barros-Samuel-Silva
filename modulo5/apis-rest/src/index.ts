import express, { Request, Response } from 'express'
import { users } from './data'
import cors from 'cors'
import { User } from './types'

const app = express()
app.use(express.json())
app.use(cors())

//EXERCICIO 1

app.get("/users", (req: Request, res: Response) => {

    res.status(200).send(users)

})

//EXERCICIO 2

app.get("/users", (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const userType = req.query.type as string

        if (!userType) {
            errorCode = 422
            throw new Error('Falta passar o tipo de usuário')
        }

        const usersSelected = users.filter((user) => {
            return user.type === userType
        })

        if (userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 402
            throw new Error('Insira um tipo válido: "ADMIN" ou "NORMAL"')
        }

        res.status(200).send(usersSelected)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//EXERCICIO 3

app.get("/userName", (req: Request, res: Response) => {

    let errorCode = 400

    try {
        const userName = req.query.name as string

        const userSelected = users.filter((user)=>{
            return user.name.toLocaleLowerCase() === userName.toLocaleLowerCase()
        })

        if (!userName) {
            errorCode = 422
            throw new Error('Falta passar o nome do usuário')
        }

        if(userSelected.length === 0){
            errorCode = 402
            throw new Error('Usuário não consta no banco de dados')
            
            }
        
        res.status(200).send(userSelected)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

//EXERCICIO 4

app.post('/users/addUser',(req:Request,res:Response)=>{
//app.put('/addUser',(req:Request,res:Response)=>{

    let errorCode = 400
    
    try {
        const {userName, userEmail, userType, userAge} = req.body
    
        if(!userName || !userEmail || !userType || !userAge){
            errorCode=422
            throw new Error('Falta passar algum parâmetro')
        }
    
        if(userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !=="NORMAL"){
            errorCode=402
            throw new Error('Insira um tipo válido: "ADMIN" ou "Normal"')
        }

        const newUser:User = {
            id: Math.random(),
            name: userName,
            email: userEmail,
            type: userType,
            age: userAge
        }
    
        users.push(newUser)
        res.status(201).send(users)

    } catch (error:any) {
            res.status(errorCode).send(error.message)
    }
})

//EXERCICIO 5

app.put('/users/change/:id',(req:Request, res:Response)=>{
    
    let errorCode = 400

    try {
        const userId = Number(req.params.id)
        const newName = req.body.name
          
        if(!newName || !userId){
            errorCode=422
            throw new Error('Falta passar os parâmetros')
        }
   
        const userExists = users.find((user)=>{
        return user.id === userId
        })
       
        if(!userExists){
        errorCode=404
            throw new Error('Usuário não existe no banco de dados')
        }
    
        for(let user of users){
        if(userId=== user.id){
            user.name = newName
        }
    }
        res.status(201).send()

    } catch (error:any) {
    
        res.status(errorCode).send(error.message)
    }
})

//EXERCICIO 6

app.patch('/users/change/:id',(req:Request, res:Response)=>{
    
    let errorCode = 400

    try {
        const userId = Number(req.params.id)
        const newName = req.body.name
          
        if(!newName || !userId){
            errorCode=422
            throw new Error('Falta passar os parâmetros')
        }
   
        const userExists = users.find((user)=>{
        return user.id === userId
        })
       
        if(!userExists){
        errorCode=404
            throw new Error('Usuário não existe no banco de dados')
        }
    
        for(let user of users){
        if(userId=== user.id){
            user.name = newName
        }
    }
        res.status(201).send(users)

    } catch (error:any) {
    
        res.status(errorCode).send(error.message)
    }
})

//EXERCICIO 6

app.delete('/users/del/:id',(req:Request, res:Response)=>{
    
    let errorCode = 400

    try {
        const userId = Number(req.params.id)
            
        if(!userId){
            errorCode=422
            throw new Error('Falta passar o id do usuário')
        }
   
        const userExists = users.find((user)=>{
        return user.id === userId
        })
       
        if(!userExists){
        errorCode=404
            throw new Error('Usuário não existe no banco de dados')
        }
    
        for(let user of users){
        if(userId=== user.id){
            const userDel = users.filter((user)=>{
               return user.id !== userId
            })
            res.status(201).send(userDel)
        }
    }
        

    } catch (error:any) {
    
        res.status(errorCode).send(error.message)
    }
})

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003')
})