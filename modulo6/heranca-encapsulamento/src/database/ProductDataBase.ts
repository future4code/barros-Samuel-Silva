import { BaseDataBase } from "./BaseDatabase";
import { User } from "../models/User";
import { Product } from "../models/Product";
import { MigrationDataBase } from "./migrations";

export class ProductDataBase extends BaseDataBase{
    public static TABLE_PRODUCTS = "Labe_Products"

    public static getAllProducts = async()=>{
        const result = await BaseDataBase.connection(ProductDataBase.TABLE_PRODUCTS).select();
            return result
    }

    public static createProducts = async(newProduct:Product)=>{
        await BaseDataBase.connection(ProductDataBase.TABLE_PRODUCTS).insert(newProduct)
    }  

    public static getProductById = async(id:string)=>{
        const result = await BaseDataBase.connection(ProductDataBase.TABLE_PRODUCTS)
            .select()
            .where(`id`,`*`,`${id}`);
            return result
    }  
}

