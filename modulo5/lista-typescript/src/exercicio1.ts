console.log("EXERCICIO 1:")

const input = require("readline-sync");
const nameUser:string = input.question("Insira seu nome: ");
const birth:string = input.question("Insira sua da de nascimento: ");

function phrase ():void {
    const date:string[] = birth.split("/")
    console.log(`Olá me chamo ${nameUser}, nasci no dia ${date[0]} do mês ${date[1]} do ano de ${date[2]}`)
}

phrase()