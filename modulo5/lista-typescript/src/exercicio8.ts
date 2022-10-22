console.log("EXERCICIO 8:")

const inputWord = require("readline-sync");
const newWord:string = inputWord.question("Insira uma palavra sem letras repetidas: ");

const fontRed = '\033[0;31m';
const num:number = newWord.length
let fat:number = 1

for (let i = 1; i <= num; i++) {
    fat = fat * i
}
console.log(fontRed+`O fatorial de "${newWord.toUpperCase()}" é: ${fat}`)