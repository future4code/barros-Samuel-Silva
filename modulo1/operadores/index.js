// Exercícios de interpretação de código

//  EXERCÍCIO 1  
const bool1 = true
const bool2 = false
const bool3 = !bool2 

a)  let resultado = bool1 && bool2
    console.log("a. ", resultado)
***    False    ***
b)  resultado = bool1 && bool2 && bool3 
    console.log("b. ", resultado) 
***    False    ***
c)  resultado = !resultado && (bool1 || bool2) 
    console.log("c. ", resultado)
***    True ****
d)  console.log("d. ", typeof resultado)
***    boolean  ***

//    EXERCÍCIO 2
    
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")


const soma = primeiroNumero + segundoNumero

console.log(soma)
//*** Não ira funcionar, pois irá concatenar   ***

//    EXERCÍCIO 3
    
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")
let primeiroNumeroConvert = Number(primeiroNumero)
let segundoNumeroConvert = Number(segundoNumero)
const soma = primeiroNumeroConvert + segundoNumeroConvert

console.log(soma)


// Exercícios de escrita de código

//  EXERCÍCIO 1  

let idade = prompt("Qual sua idadade?")
let idadeAmigo = prompt("Qual a idade de seu/sua melhor amigo(a)?")
let comparaIdade = idade > idadeAmigo

console.log("Sua idade é maior do que a de seu(sua) melhor amigo(a)?" , comparaIdade)
console.log("A diferença de idade entre vocês é:" , idade - idadeAmigo , "anos")

// EXERCÍCIO 2

let numeroPar = prompt("Digite um número par:")
const dividendo = 2
console.log("O resto da divisão de seu número por 2 é:" , numeroPar % dividendo) 

// Todos os números resultam em resto = 0

// Todos os números ímpares resultam em resto = 1


// EXERCÍCIO 3

let idadeAnos = prompt("Quantos anos você tem?")
let idadeMeses = 12
let idadeDias = 365
let idadeHoras = 8760

console.log("Você tem" , idadeAnos * idadeMeses , "meses de vida," )
console.log("ou" , idadeAnos * idadeDias , "dias de vida," )
console.log("ou" , idadeAnos * idadeHoras , "horas de vida!" )


// EXERCÍCIO 4

let numero1 = prompt("Digite o primeiro número:")
let numero2 = prompt("Digite o segundo número:")
let numero1Convert = Number(numero1)
let numero2Convert = Number(numero2)
console.log("Primeiro número:" , numero1 , " / Segundo número:" , numero2)

console.log("O primeiro número é maior que o segundo?" , numero1Convert > numero2Convert)
console.log("O primeiro número é igual ao segundo?" , numero1Convert === numero2Convert)
console.log("O primeiro número é divisível pelo segundo?" , numero1Convert%numero2Convert===0)
console.log("O segundo número é divisível pelo primeiro?" , numero2Convert%numero2Convert===0)



// DESAFIO

//1. Conversor de temperaturas

let fahren77 = 77
let celsius80 = 80
let celsius30 = 30

fahrenKelvin = (fahren77 - 32) * (5 / 9) + 273.15
console.log("Convertendo 77 graus Fahrenheit(°F) em graus Kelvin(K)")
console.log("77ºF equivale a",fahrenKelvin,"ºK")

celsiusFahren = celsius80 * (9/5) + 32
console.log("Convertendo 80 graus Celsius(ºC) em graus Fahrenheit(°F)")
console.log("80Cº equivale a",celsiusFahren,"ºF")

celsiusFahren = celsius30 * (9/5) + 32
fahrenKelvin = (celsiusFahren - 32) * (5 / 9) + 273.15
console.log("Convertendo 30 graus Celsius(ºC) em graus Fahrenheit(°F) e Kelvin(K)")
console.log("30Cº equivale a",celsiusFahren,"ºF ou", fahrenKelvin ,"K")

celsius30 = prompt("Digite o a temperatura em Celsius(ºC) a ser convertida") 
celsiusFahren = celsius30 * (9/5) + 32
fahrenKelvin = (celsiusFahren - 32) * (5 / 9) + 273.15
console.log("Convertendo 30 graus Celsius(ºC) em graus Fahrenheit(°F) e Kelvin(K)")
console.log("30Cº equivale a",celsiusFahren,"ºF ou", fahrenKelvin ,"K")


//2. Cálculo de Quilowatts/Hora

let quilowatts = 280
let valorQuilowatss = 0.05
let custo = quilowatts * valorQuilowatss
console.log("O consumo de 280 Quilowatts/Hora, custará: R$",custo)

let percentualDesconto = 0.15
let desconto = custo * percentualDesconto
let custoComDesconto = custo - desconto
console.log("Com 15% de desconto, o valor será R$", custoComDesconto)


//3. Conversor de medidas

console.log("************CONVERSÃO DE MEDIDAS************")
let primeiraUnidade = 20
let libraKilo = 0.453592
let conversao = primeiraUnidade * libraKilo
console.log("20Lb equivalem a" ,conversao,"Kg")
console.log("********************************************")
primeiraUnidade = 10.5
let oncaKilo = 0.283495
conversao = primeiraUnidade * oncaKilo
console.log("10.5oz equivalem a" ,conversao,"Kg")
console.log("********************************************")
primeiraUnidade = 100
let milhaMetro = 1609.34
conversao = primeiraUnidade * milhaMetro
console.log("100mi equivalem a" ,conversao,"Mt")
console.log("********************************************")
primeiraUnidade = 50
let peMetro = 0.3048
conversao = primeiraUnidade * peMetro
console.log("50ft equivalem a" ,conversao,"Mt")
console.log("********************************************")
primeiraUnidade = 103.56
let galaoLitro = 454.609
conversao = primeiraUnidade * galaoLitro
console.log("103.56gal equivalem a" ,conversao,"Lt")
console.log("********************************************")
primeiraUnidade = 450
let xicaraLitro = 0.284131
conversao = primeiraUnidade * xicaraLitro
console.log("450xic equivalem a" ,conversao,"Lt")
console.log("********************************************")

primeiraUnidade = prompt("Digite o valor em milhas a ser convertido:")
milhaMetro = 1609.34
conversao = primeiraUnidade * milhaMetro
console.log(primeiraUnidade,"mi equivalem a" ,conversao,"Mt")
console.log("********************************************")


