import express, {Request,Response} from "express"
import cors from 'cors'
import { listPost, listUsers } from "./data"

const app = express()

app.use(express.json())

app.use(cors())

app.get("/url", (req:Request, res:Response) => {    
    res.status(200).send("Comunicação ok")
})

app.get("/users", (req:Request, res:Response) => {    
    res.status(200).send(listUsers)
})

app.get("/posts", (req:Request, res:Response) => {          
    res.status(200).send(listPost)
})

app.get("/postsId/:userid", (req:Request, res:Response) => {    
    const postId = req.query.postId
    const userId = req.headers.userId

    if(!postId && !userId){
        res.status(400).send("Erro! Favor informar um id")
    }
    const posrtFilter = listPost.filter((post)=>{
        return post.id === userId
    })

})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

