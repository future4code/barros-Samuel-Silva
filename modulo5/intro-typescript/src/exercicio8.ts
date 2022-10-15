//EXERCICIO 8

//Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, 
//se o input da sua função for "abcd", a saída deve ser "dcba" .

function invertWord (): void{
    const userInput = require("readline-sync")
    const word:string = userInput.question("Insira uma palavra: ")
    const wordInverted = word.split("").reverse().join("");
    console.log(wordInverted);
}

invertWord()