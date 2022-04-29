/*
//EXRCÍCIO CONDICIONAIS

//Exercícios de interpretação de código

1.  Leia o código abaixo:

a) Explique o que o código faz. Qual o teste que ele realiza? 

    Pede um número ao usuário, transforma a resposta do usuário em Number e em seguida testa se
    o número do usuário tem resto da divisão por 2 igual a 0. Se verdadeiro imprime "Passou no teste."
    Se o resto for diferente de 0 imprime "Não passou no teste."

b) Para que tipos de números ele imprime no console "Passou no teste"? 

    Todos os números divisíveis por 2 ou pares

c) Para que tipos de números a mensagem é "Não passou no teste"?

    Todos os números não divisíveis por 2 ou ímpares

2. 2. O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas
     de um supermercado:
    
a) Para que serve o código acima?

    O código serve para informar ao cliente o preço do produto escolhido por ele
    
b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

    O preço da fruta , Maçã ,  é , R$ 2.25
    
c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos 
   o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

    O preço da fruta , Pêra ,  é , R$ 5.5 . Ele continua realizando o teste até o fim, mas o resultado é validado

3. Leia o código abaixo:

a) O que a primeira linha está fazendo?

    Solicitando ao usuário um número através de um prompt e transformando a resposta string (a variavel
    declarada) em Number.

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
    
    Digitando 10 a resposta será : Esse número passou no teste. Se digitado -10 a resposta será : undefined

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

    Sim, undefined, pois a opção -10 leverá para o console.log fora do escopo onde está a variável do if numero > 0



// Exercícios de escrita de código

// 1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir
//   (apenas maiores de idade)

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// b) Garanta que essa variável é do tipo Number, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
//    Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`


let idade = Number(prompt('Digite sua idade:'))
        if (idade >= 18) {
            console.log("Você pode dirigir!");
        } else{
            console.log("Voê não pode dirigir");
        }

//2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino)
//   ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". 
//   Utilize o bloco if/else

let respTurno = prompt("Em qual turno você estuda? (M)Matutino, (V)Vespertino ou (N)Noturno?")
let turno = respTurno.toUpperCase()
    if (turno == 'M') {
        console.log("Bom dia!")
    } if (turno == 'V') {   
        console.log("Boa tarde!") 
    } if (turno == 'N') {
        console.log("Boa noite!")
    }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

let respTurno1 = prompt("Em qual turno você estuda? (M)Matutino, (V)Vespertino ou (N)Noturno?")
let turno1 = respTurno1.toUpperCase()
    switch (turno1) {
        case 'M':
            console.log("Bom dia!")
        break
        case 'V':
            console.log("Boa tarde!")
        break
        case 'N':
            console.log("Boa noite!")
        break
    }
    
//4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme 
com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta 
ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então 
verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a 
mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


let genero = prompt('Qual gênero de filme vamos assistir?')
let valorIngresso = Number(prompt('Qual o valor do ingresso?'))

if (genero='fantasia' && valorIngresso<15) {
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}



// DESAFIO

// 1. Modifique o código do exercício 4 de escrita de código para, antes de imprimir a mensagem "Bom filme!", 
//    pergunte ao usuário, pelo prompt qual lanchinho ele vai comprar (pipoca, chocolate, doces, etc) e imprima 
//    no console as mensagens "Bom filme!" e "Aproveite o seu [LANCHINHO]", trocando [LANCHINHO] pelo que o usuário 
//    colocou no input.


let genero = prompt('Qual gênero de filme vamos assistir?')
let valorIngresso = Number(prompt('Qual o valor do ingresso?'))
let lanchinho = prompt('Qual lanchinho você vai comprar?')

if (genero='fantasia' && valorIngresso<15) {
    console.log(`Bom filme! Aproveite o seu ${lanchinho}`)
} else {
    console.log('Escolha outro filme :(')
}


//2. Você foi contratado para criar um sistema de vendas de ingressos de jogos de um estádio de futebol. 
     Para esta compra, o usuário deve fornecer algumas informações:
- Nome completo;
- Tipo de jogo: IN indica internacional; e DO indica doméstico;
- Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final
- Categoria: pode ser as opções 1, 2, 3 ou 4;
- Quantidade de ingressos

 - O seu sistema deve solicitar estas informações ao usuário, através do `prompt` . 
  Além disso, ele deve imprimir tudo isso, junto com o valor de cada ingresso e o valor total que o usuário 
  tem que pagar (ou seja, o valor unitário do ingresso multiplicado pela quantidade). 
  Abaixo, há a tabela com os valores de cada ingresso e exemplos de execução do programa. 
  Lembrando que o valor de jogos internacionais é o mesmo de jogos domésticos, mas seus preços devem ser 
  multiplicados pelo valor do dólar (considerar o dólar = R$4,10)
*/

let nomeCompleto = prompt('Nome completo:')
let tipoDeJogo = prompt('Tipo de jogo: IN-Internacional ou DO-Doméstico?')
let etapaDeJogo = prompt('Etapa: DT-Disputa 3ºlugar, SF-Semifinal ou FI-Final ?')
let categoria = Number(prompt('Qual categoria?'))
let qtdadeIngresso = Number(prompt('Quantos ingressos?'))
let tipoDeJogoUp = tipoDeJogo.toUpperCase()
let etapaDeJogoUp = etapaDeJogo.toUpperCase()
let tipoEscolhido
let etapaEscolhida
let precoIngresso


switch (tipoDeJogoUp) {
    case 'IN':
        tipoEscolhido=('Internacional')
    break
    case 'DO':
        tipoEscolhido=('Doméstico')
    break
    }

switch (etapaDeJogoUp) {
    case 'DT':
        etapaEscolhida=('Disputa 3ºlugar')
    break
    case 'SF':
        etapaEscolhida=('Semifinal')
    break
    case 'FI':
        etapaEscolhida=('Final')
    break
    }

// Tabela de preços
function verificaPreco(etapaDeJogoUp, categoria) {
    switch (etapaDeJogoUp) {
        case 'SF' :
            switch (categoria) {
                case 1: 
                precoIngresso = 1320  
                break
                case 2:
                precoIngresso = 880 
                break
                case 3: 
                precoIngresso = 550 
                break  
                case 4:
                precoIngresso = 220 
                break
            }
        break
        case 'DT' :
            switch (categoria) {
                case 1: 
                precoIngresso = 660 
                break
                case 2: 
                precoIngresso = 440
                break  
                case 3: 
                precoIngresso = 330 
                break   
                case 4: 
                precoIngresso = 170 
                break 
            }
        break
        case 'FI' :
            switch (categoria) {
                case 1: 
                precoIngresso = 198
                break
                case 2: 
                precoIngresso = 1320 
                break  
                case 3: 
                precoIngresso = 880 
                break 
                case 4: 
                precoIngresso = 330 
                break
            }
        break   
            }
    }
    
verificaPreco(etapaDeJogoUp, categoria)


let dolar = 4.10
let precoUnit
let moeda = 'R$'



function convertePreco (precoIngresso, precoInterUnit) {
    if (tipoDeJogoUp==='IN')
    precoUnit=precoIngresso/dolar,
    moeda='U$'
    else
    precoUnit=precoIngresso
}
convertePreco(precoIngresso,precoUnit)
let precoTotal = (precoUnit) * (qtdadeIngresso)


console.log(`---Dados da compra--- 
Nome do cliente: ${nomeCompleto} 
Tipo do jogo: ${tipoEscolhido}
Etapa do jogo: ${etapaEscolhida} 
Categoria: ${categoria}
Quantidade de Ingressos: ${qtdadeIngresso} ingressos
---Valores--- 
Valor do ingresso:${moeda} ${precoUnit}    
Valor total:${moeda} ${precoTotal}`)


