import { Request,Response } from "express";
import connection from "../database/connections";

export const createClient = async (req: Request, res: Response)=>{
    let errorCode=400
    const nome = req.body.nome

    try {
        if(!nome){
            throw new Error("Nome não informado!.")
        }
        await connection('Case_Clients').insert({nome})
        res.status(200).send("Cliente cadastrado!");
    }catch (error:any){
        res.status(errorCode).send({message: error.message});
    }
}
