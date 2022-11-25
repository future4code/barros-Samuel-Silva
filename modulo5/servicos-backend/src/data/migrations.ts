import { connection } from "./connection"
import Address from "./Address.json"

const printError = (error: any) => { console.log(error.sqlMessage || error.message) }

const createTables = () => connection
   .raw(`
   CREATE TABLE Address(
      id VARCHAR(255) PRIMARY KEY,
       cep VARCHAR(9),
       logradouro VARCHAR(255) NOT NULL,
       numero VARCHAR(10) NOT NULL,
       complemento VARCHAR(6) NOT NULL,
       bairro VARCHAR(255),
       cidade VARCHAR(255),
       estado VARCHAR(2)
       );
   `)
   .then(() => { console.log("Tabelas criadas") })
   .catch(printError)

const insertUsers = () => connection("Address")
   .insert(Address)
   .then(() => { console.log("Usuários criados") })
   .catch(printError)

const closeConnection = () => { connection.destroy() }

createTables()
   .then(insertUsers)
   .finally(closeConnection)