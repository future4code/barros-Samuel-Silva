import knex from "knex"
import dotenv from "dotenv"

dotenv.config()

const connection = knex({
    client:"mysql",
    connection:{
        host:"35.226.146.116",
        port:3306,
        user:"4416561-samuel-silva",
        password:"9p4qtRA2Tun6I0rQjyuE",
        database:"jbl-4416561-samuel-silva",
        multipleStatements:true
    }
}
);

export default connection;