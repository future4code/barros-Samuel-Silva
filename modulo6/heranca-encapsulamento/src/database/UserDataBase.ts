import { BaseDataBase } from "./BaseDatabase";
import { User } from "../models/User";

export class UserDataBase extends BaseDataBase{
    public static TABLE_USERS = "Labe_Users"

    public static getAllUsers = async()=>{
        const result = await BaseDataBase.connection(UserDataBase.TABLE_USERS).select();
            return result
    }

    public static createUser = async(newUser:User)=>{
        await BaseDataBase.connection(UserDataBase.TABLE_USERS).insert(newUser)
    }  

    public static getUserById = async(id:string)=>{
        const result = await BaseDataBase.connection(UserDataBase.TABLE_USERS)
            .select()
            .where(`id`,`*`,`${id}`);
            return result
    }  
}
