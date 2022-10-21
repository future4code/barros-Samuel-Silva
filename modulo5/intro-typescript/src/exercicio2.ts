//EXERCICIO 2

//A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array 
//que contenha essas três cores. Refatore a função para o Typescript.

function imprimeTresCoresFavoritas() {
    const userInput = require("readline-sync")
    const cor1:string = userInput.question("Insira sua primeira cor favorita ")
    const cor2:string = userInput.question("Insira sua segunda cor favorita ")
    const cor3:string = userInput.question("Insira sua terceira cor favorita ")
    
    console.log(" \033[0;31m Suas cores favoritas"),
    console.table([cor1, cor2, cor3])
 }
 imprimeTresCoresFavoritas()