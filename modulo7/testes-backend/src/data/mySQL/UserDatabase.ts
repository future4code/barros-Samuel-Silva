import { UserRepository } from "../../business/UserRepository";
import { CustomError } from "../../error/customError";
import { User } from "../../model/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {

    protected tableName: string = "User_Arq";

    private toModel(dbModel?: any): User | undefined {
        return (
            dbModel &&
            new User(
                dbModel.id,
                dbModel.name,
                dbModel.email,
                dbModel.role
            )
        );
    }

    //BUSCA USUARIO POR ID

    public getUserById = async (idUser: string): Promise<User | undefined> => {
        try {
            const result = await BaseDatabase.connection.raw(`
                   SELECT * from ${this.tableName} WHERE id = '${idUser}'
                `);
            return this.toModel(result[0][0]);
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };


    //BUSCA TODOS OS USUARIOS

    public getAllUsers = async () => {
        try {
            const allUsers = await UserDatabase.connection
                .select()
                .from("User_Arq");
            return allUsers;
        } catch (error: any) {
            throw new CustomError(error.statusCode, error.message);
        }
    };

}
