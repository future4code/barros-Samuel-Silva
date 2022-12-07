import { Knex } from "knex";
import { Product } from "./Product";

export class ProductDataBase{
    constructor(private connection:Knex){
        this.connection=connection;
    }

    public insertProduct=async(newProduct:Product)=>{
       await this.connection("Labe_Products").insert(newProduct);
    }
    public getProducts=async()=>{
       const result= await this.connection("Labe_Products").select();
       return result;
    }
    public getProductId=async(id:string)=>{
       const result= await this.connection("Labe_Products").select().where(id);
       return result;
    }
    
}