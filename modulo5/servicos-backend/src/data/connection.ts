import knex from "knex"
import dotenv from "dotenv"
import { env } from "process";

dotenv.config()

export const connection = knex({
    client:"mysql",
    connection:{
        host:process.env.DB_HOST,
        port:Number(env.DB_PORT),
        user:process.env.DB_USER,
        password:process.env.DB_PASSSWORD,
        database:process.env.DB_SCHEMA,
        multipleStatements:true
    }
}
);
