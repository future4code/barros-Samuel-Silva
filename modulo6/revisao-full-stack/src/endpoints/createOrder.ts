import { Request,Response } from "express";
import connection from "../database/connections";
import { TProduct } from "../models/TProduct";

export const createOrder = async (req: Request, res: Response)=>{
    let errorCode=400;

    try {

        const delivery_date = req.body.delivery_date;
        const products:TProduct[] = req.body.product;  
        const fk_client = req.body.fk_client;

        if(!delivery_date || !products || !fk_client){
            throw new Error("Faltam informações!.")
        }

        const idsProducts = products.map((product)=>product.id);
        const stockProducts = await connection.select('qty_stock').from('Case_Products')
        .whereIn('id', idsProducts)

        for (let i=0; i<products.length; i++){
            if (products[i].qty>stockProducts[i].qty_stock){
                throw new Error('Estoque insuficiente')
            }
        }

        await products.forEach(async product => {
            await connection('Orders').insert({
                order_date:new Date().toISOString().slice(0,10),
                delivery_date, 
                qty:product.qty,
                fk_client,
                fk_product:product.id
            })
            const getStock = await connection.select('qty_stock')
            .from('Case_Products')
            .where({id:product.id})

            const stockAtual = Number(getStock[0].qty_stock);

            await connection('Case_Products')
            .where({id:product.id})
            .update({qty_stock:stockAtual-product.qty})
        })

        res.status(200).send("Pedido cadastrado!");
    }catch (error:any){
        res.status(errorCode).send({message: error.message});
    }
}