
// -------------- EXERCICIO INTERPRETACAO DE CODIGO -------------
// Questao 1 - Resposta: 10 5 
// Questao 2 - Resposta: null  - a variavel C nao foi declarada
// Questao 3 - Resposta: O programa calcula o valor por hora trabalhada
//                       let horasTrabalhadas, let valorPorDia

// ----------------- EXERCICIO ESCRITA DE CODIGO ------------------

//  EXERCICIO 01

let nome = ""
let idade = ""
console.log (typeof (nome , idade))
// Como não especifiquei o tipo da variavel, entende-se que qualquer
// caracter seja do tipo string

console.log(nome = prompt("Qual o seu nome?"))
console.log(idade = prompt("Qua sua idade?"))
console.log("Olá" , nome , "você tem", idade, "anos")

//  EXERCICIO 02

console.log(roupa = prompt("Você esta vestindo roupa azul?"))
console.log(pais = prompt("Voce mora no Brasil?"))
console.log(estudante = prompt("Voce e estudante?"))
console.log("Você esta vestindo roupa azul?", roupa)
console.log("Você mora no Brasil?" , pais)
console.log("Você é estudante?", estudante)

//  EXERCICIO 03

let a = 10
let b = 25

let a2 = a
let b2 = b

console.log("O novo valor de a é" , b2)
console.log("O novo valor de b é" , a2)


// ----------------- DESAFIO ------------------

console.log(num1 = prompt("Digite o primeiro número:"))
console.log(num2 = prompt("Digite o segundo número:"))
let num1ComoNumber = Number(num1)
let num2ComoNumber = Number(num2)
//console.log (typeof (num1ComoNumber))
//console.log (typeof (num2ComoNumber))
console.log("A soma dos números é:" , num1ComoNumber + num2ComoNumber)
console.log("A multiplicação dos números é:" , num1ComoNumber * num2ComoNumber)





