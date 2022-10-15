//EXERCICIO 6

//Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
//a) A soma desses números
//b) A subtração desses números
//c) A multiplicação desses números
//d) Qual deles é o maior

const userInput = require("readline-sync")
const num1:number = userInput.question("Insira um numero: ")
const num2:number = userInput.question("Insira outro numero: ")

const fontYellow = "\033[1;33m"
const fontRed = '\033[0;31m';
const fontBlue  = '\u001b[34m';


function comparaNumero (): void {
    let soma:number = num1 + num2
    let subt:number = num1 - num2
    let mult:number = num1 * num2
    if (num1 > num2) {
        console.log(fontBlue +`O primeiro número é maior que o segundo`)    
    } else if (num1 < num2) {
        console.log(fontBlue +`O segundo número é maior que o primeiro`)
    } else {
        console.log(fontBlue +`Os números são iguais`)
    }
    console.log(fontRed+ `A soma dos números é ${soma} `)
    console.log(fontYellow + `A subtração dos números é ${subt} `)
    console.log(fontBlue + `A multiplicação dos números é ${mult} `)
    
}

comparaNumero()