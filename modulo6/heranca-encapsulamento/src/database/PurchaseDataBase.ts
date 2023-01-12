import { BaseDataBase } from "./BaseDatabase";
import { Purchase } from "../models/Purchase";
import { TABLE_PRODUCTS, TABLE_PURCHASES, TABLE_USERS } from "../database/tableNames"
import { Request } from "express";
import { getUserPurchases } from "../endpoints/getUserPurchases";

export class PurchaseDataBase extends BaseDataBase{

    public static TABLE_PURCHASES = "Labe_Purchases"

    public static getAllPurchase = async()=>{        
        const [result] = await BaseDataBase.connection.raw(`
        SELECT
            ${TABLE_USERS}.email,
            ${TABLE_PRODUCTS}.name AS product_name,
            ${TABLE_PRODUCTS}.price AS product_price,
            ${TABLE_PURCHASES}.quantity AS product_quantity,
            ${TABLE_PURCHASES}.total_price
        FROM ${TABLE_PURCHASES}
        JOIN ${TABLE_USERS}
        ON ${TABLE_PURCHASES}.user_id = ${TABLE_USERS}.id
        JOIN ${TABLE_PRODUCTS}
        ON ${TABLE_PURCHASES}.product_id = ${TABLE_PRODUCTS}.id
        WHERE ${TABLE_PURCHASES}.user_id = ${getUserPurchases}.id;
        `)

        // const result = await BaseDataBase.connection(PurchaseDataBase.TABLE_PURCHASES).select();
        //     return result
    }

    public static createPurchase = async(newPurchase:Purchase)=>{
        await BaseDataBase.connection(PurchaseDataBase.TABLE_PURCHASES).insert(newPurchase)
    }  

    public static getPurchaseById = async(id:string)=>{
        const result = await BaseDataBase.connection(PurchaseDataBase.TABLE_PURCHASES)
            .select()
            .where(`id`,`*`,`${id}`);
            return result
        }  
}


