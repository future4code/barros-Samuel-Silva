//-------Exercícios de interpretação de código-------
/*

Exercício 1

a) O que vai ser impresso no console?
R: 10 e 100

b) O que aconteceria se retirasse os dois `console.log`
 e simplesmente invocasse a função `minhaFuncao(2)` e 
 `minhaFuncao(10)`? O que apareceria no console?
R: Não aprecireia nada, porém a função seria executada

Exercício 2

a. Explique o que essa função faz e qual é sua utilidade
R: Ela transforma o texto do usuário em minúsculo e procura a string "cenoura".
   

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura`
     R: true
     ii.  `CENOURA é bom pra vista`
     R: true
     iii. `Cenouras crescem na terra`
     R: false

*/
//-------Exercícios de escrita de código-------

// Exercício 1

/*
a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas 
informações sobre você, como: 
```
"Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
```
Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. 
Lembrando que a função não possui entradas, apenas imprime essa mensagem.

function sobreMim() {
     let nome = "Samuel"
     let idade = 41
     let cidade = "Barbacena"
     let estudante = "sou"
     console.log(`Eu sou ${nome}, tenho ${idade} anos ,moro em ${cidade} e ${estudante} estudante.`)
     
 }

b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de 
uma pessoa: o nome (`string`), a idade (`number`), a cidade (`string`) e uma profissão (`string`).
 Ela deve retornar uma `string` que unifique todas as informações da pessoa em uma só mensagem 
 com o template:


 function sobreMim() {
    let nome = prompt("Qual seu nome?")
    let idade = prompt("Qual sua idade?")
    let cidade = prompt("Em qual cidades você mora?")
    let profissao = prompt("Qual sua profissão?")
   console.log(`Eu sou ${nome}, tenho ${idade} anos ,moro em ${cidade} e sou ${profissao}. `)
    
}


// Exercício 2

a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, 
faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.


function soma(numero1, numero2) {
    let resultado = numero1 + numero2
    return resultado

}
console.log(soma(2,3))

b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é maior ou igual ao segundo.

function maiorOuIgual(primeiroNumero,segundoNumero) {
    let teste = primeiroNumero >= segundoNumero
    return teste
    
}

c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

function parOuImpar(numeroUsuario){
    let divisor = (numeroUsuario % 2)
    let testePar = (divisor === 0)
    return testePar
    }
  
d) Faça uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem,
 juntamente com uma versão dela em letras maiúsculas.   

function mensagem(mensagemUsuario){
    let tamanhoMensagem = mensagemUsuario.length
    let mensagemUpper = mensagemUsuario.toUpperCase()
    console.log(tamanhoMensagem , mensagemUpper)
}

// Exercício 3

Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). 
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores 
inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:


function calculadora(fator1,fator2) {
    console.log(`Os fatores inseridos foram ${fator1} e ${fator2}`)
    let totalsoma = fator1 + fator2
    console.log(`A soma dos dois fatores é: ${totalsoma}`)
    let totalsubtracao = fator1 - fator2
    console.log(`A subtração dos dois fatores é: ${totalsubtracao}`)
    let totalmultiplicacao = fator1 * fator2
    console.log(`A multiplicação dos dois fatores é: ${totalmultiplicacao}`)
    let totaldivisao = fator1 / fator2
    console.log(`A divisão dos dois fatores é: ${totaldivisao}`)
}

//-------DESAFIO-------

1. Funções são trechos de códigos como quaisquer outros mas que podemos acessá-los mais de uma vez ao longo do código 
através de invocações/chamadas. Então, funções podem chamar/invocar outras funções também. Sua tarefa é escrever duas funções
    
    a) Escreva uma *arrow function* que recebe um parâmetro e imprime no console esse parâmetro
*/
let imprime = (parametro) => {
    console.log(parametro)

}
/*
    
    b) Escreva outra *arrow function* que recebe dois valores como parâmetros mas **nenhum retorno.** 
    Faça a soma entre esses valores e chame a sua primeira função mandando este resultado da soma como entrada para imprimi-lo

let valores = (valor1,valor2) => {
    let soma = (valor1 + valor2)
    imprime(soma)
}
/*
    
2. Faça uma função que execute o teorema de Pitágoras, recebendo dois catetos e calculando o valor da hipotenusa.
   Retorne este valor, invoque a função e imprima o resultado no console. 
           
  */ 
 let pitagoras = (cateto1, cateto2) =>{
     let hipotenusa = Math.hypot(cateto1, cateto2)
     return hipotenusa
 }
 console.log(pitagoras(3,4))
 