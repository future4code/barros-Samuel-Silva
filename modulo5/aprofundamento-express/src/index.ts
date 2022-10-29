import express,{Request, Response} from "express"
import cors from 'cors'
import {ToDos} from "./types"
import {listToDo} from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/ping", (req:Request, res:Response) => {          
    res.send("Pong! 🏓")
})

//EXERCICIO 4

app.get("/status",(req:Request,res:Response)=>{
    const todoStatus = req.query.status 

    if(!todoStatus){
        res.status(400).send("Colocar obrigatoriamente um status")
    } else {
        let toDosCompleted = listToDo.filter((toDo)=>{
            return toDo.completed === Boolean(todoStatus)
        })
        res.status(200).send(toDosCompleted)
    }
})

//EXERCICIO 5

app.post("/newToDo",(req:Request, res:Response)=>{
    const toDoTitle = req.body.title                              
    const userToAdd = req.headers.authorization
   
    if(!toDoTitle || !userToAdd){
        res.status(400).send("Faltou informações")    
    }
    for(let i=0; i < listToDo.length; i++){
        if(listToDo[i].id === Number(userToAdd)){
            listToDo.push({
                userId: Number(userToAdd),
                id:Number(Date.now().toString()),   
                title: toDoTitle,
                completed: false,
            })
        }
    }
    res.status(200).send({listToDo})
})

//EXERCICIO 6

app.put("/change/:id",(req:Request, res:Response)=>{
    
    const toDoChange = req.params.id
   
    if(!toDoChange){
        res.status(400).send("Faltou informar id da tarefa")    
    } else {
    for(let i=0; i < listToDo.length; i++){
        if(listToDo[i].id === Number(toDoChange)){
            if(listToDo[i].completed === false){
                listToDo[i].completed = true
            } else {
                listToDo[i].completed = false
            }
        }
    res.status(200).send({listToDo})
    }   
    }
})

//EXERCICIO 7

app.delete("/delete/:id",(req:Request, res:Response)=>{
    
    const toDoDelete = req.params.id
   
    if(!toDoDelete){
        res.status(400).send("Faltou informar id da tarefa")    
    } else {
       function removeItem() {
        return listToDo.filter(function(i) {
            return i.id !== Number(toDoDelete)})
       }
       
    }
    res.status(200).send({listToDo})
})



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
