import express,{Request, Response} from "express"
import cors from 'cors'
import {listToDo} from "./data"

const app = express()

app.use(express.json())

app.use(cors())

//EXERCICIO 1

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

// app.delete("/playlists/track",(req:Request, res:Response)=>{
    
//     const userId = req.headers.iduser
//     const toDoId = req.query.idtoDo

//     if( !userId && !toDoId ){
//         res.status(400).send("Colocar obrigatoriament um id")
//     }

//     const userFiltered = listToDo.find((user)=>{
//         return user.id === Number(userId)
//     })
//     let listFiltered 

//     if(userFiltered){

//         listFiltered = userFiltered.userId.find((item)=>{
//             return item.userid === userId
//         })

//     }else{
//         res.status(200).send("Não há um usuário com o id informado")
//     }
    
//     let toDoDeleted 

//     if(listFiltered ){
//         toDoDeleted = listFiltered.tracks.find((toDo)=>{
//             return toDo.id === toDoId

//         })
//     }else{
//         res.status(200).send("Não há uma tarefa com o id informado")
//     }  
//     if(toDoDeleted){

//         const toDoActual = toDoFiltered.filter((newToDo)=>{
//             return newToDo.id !== toDoId
//         })

//        listFiltered.tracks = toDoActual
        
//         res.status(200).send(listFiltered)

//     }else{
//         res.status(200).send("Não há uma faixa com o id informado, portanto ela não poderá ser deleta")
//     }

// })

//EXERCICIO 8

app.get("/search", (req:Request, res:Response)=>{

    const idSearch = req.query.userId 
    if(!idSearch){
        res.status(400).send("Erro")
    }
   
    let listUser = listToDo.filter((toDo)=>{
        return toDo.userId === Number(idSearch)
    })
        res.status(200).send(listUser)
       
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
})
