/*
// Exercícios de interpretação de código

// EXERCÍCIO 1

a) Matheus Nashtergaele
   Virginia Canedish
   Canal Brasil 19h

// EXERCÍCIO 2

a) Juca 3 SRD
   Juba 3 SRD
   Jubo 3 SRD

b) ... spread => Replica todos os atributos do objeto mencionado

// EXERCÍCIO 3

a) false
   undefined

b) "altura" não foi declarada


// Exercícios de escrita de código

// EXERCÍCIO 1

a) Crie um objeto. Ele deve conter duas propriedades: nome (string) 
e apelidos (um array que sempre terá exatamente três apelidos). 
Depois, escreva uma função que recebe como entrada um objeto e imprime
 uma mensagem no modelo abaixo: 

*/

 let pessoa = {
     nome: "Samuel",
     apelidos: ["Samu" , "Samuca" , "Muca"]
    
 }
 function imprime(pessoaRecebida) {
      console.log(`Eu sou ${pessoaRecebida.nome}, mas pode me chamar de: ${pessoaRecebida.apelidos[0]}, ${pessoaRecebida.apelidos[1]} ou ${pessoaRecebida.apelidos[2]}`)
  
    }
imprime(pessoa)

let novaPessoa = {
    ...pessoa, apelidos:[ "Sam" , "Ti Memel" , "Ti Samuca"]
}
imprime(novaPessoa)



// EXERCÍCIO 2

let pessoa1 = {
    nome: "José",
    idade: 42,
    profissao: "marceneiro"
}

let pessoa2 = {
    nome: "Maria",
    idade: 25,
    profissao: "doméstica"
 
}
function minhaFuncao (objeto1, objeto2) {
    let retorno1 = [objeto1.nome, objeto1.nome.length , objeto1.idade , objeto1.profissao , objeto1.profissao.length]
    let retorno2 = [objeto2.nome, objeto2.nome.length , objeto2.idade , objeto2.profissao , objeto2.profissao.length]
    console.log(retorno1,retorno2)  
    return [retorno1,retorno2]
}
minhaFuncao(pessoa1,pessoa2)


// EXERCÍCIO 3

let carrinho=[]

let fruta1 = {
    nome:"abacate",
    disponibilidade:true
}

let fruta2 = {
    nome:"melao",
    disponibilidade:true
}
let fruta3 = {
    nome:"uva",
    disponibilidade:true
}

function noCarrinho(objeto1) {
  carrinho.push(objeto1) 
      
}
noCarrinho(fruta1)
noCarrinho(fruta2)
noCarrinho(fruta3)

console.log(carrinho)

// DESAFIO

//EXERCICIO 1

let nome = prompt('Qual seu nome?')
let idade = prompt('Qual sua idade?')
let profissão = prompt('Qual sua profissão?')

let usuario = {
    nomeusuario: nome,
    idadeusuario: idade,
    profusuario: profissão
 
}

console.log(usuario)


//EXERCICIO 2

let filme1 = {
    nome:"Up",
    anoLancamento: 1998
}
let filme2 = {
    nome:"Homem Aranha",
    anoLancamento: 2020
}

function comparaFilmes(objDoFilme1,objDoFilme2) {
    let comparaAno1 = Number(filme1.anoLancamento) < Number(filme2.anoLancamento)
    let comparaAno2 = Number(filme1.anoLancamento) == Number(filme2.anoLancamento)
    console.log(`O primeiro filme foi lançado antes do segundo? ${comparaAno1}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? ${comparaAno2}`)

}
comparaFilmes()


//EXERCICIO 3

function estoque (umaDasFrutas) {
    fruta1.disponibilidade =! fruta1.disponibilidade
    return fruta1.disponibilidade
}

estoque()

    
