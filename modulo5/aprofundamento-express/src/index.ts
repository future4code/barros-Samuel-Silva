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

app.get("/toDoCompleted",(req:Request,res:Response)=>{
    const todoStatus = req.query.completed 

    if(!todoStatus){
        res.status(400).send("Colocar obrigatoriament um status")
    } else {
        const listFiltered = listToDo.find((toDo)=>{
            return toDo.completed === todoStatus
        }
    }
    
})
 

//EXERCICIO 5

app.post("/addToDo",(req:Request, res:Response)=>{
    const newList = listToDo.push(...listToDo,)
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})

