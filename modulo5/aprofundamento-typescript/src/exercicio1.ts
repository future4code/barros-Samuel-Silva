//EXERCICIO 1

//a) Crie uma variável minhaString do tipo string e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// const minhaString : string = 1

//RESPOSTA: O tipo 'number' não pode ser atribuído ao tipo 'string'.ts(2322)

//b) b) Crie uma variável meuNumero do tipo number e atribua um valor numérico.
// Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável 
//que aceite mais de um tipo de valor?

const meuNumero : number | string = 1

//c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:
//nome, que é uma string; / idade, que é um número; / corFavorita, que é uma string.
// Crie mais três objetos, que também precisam ter apenas os campos definidos acima. 
// Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

//d) Modifique a propriedade corFavorita para que apenas seja possível escolher entre as cores do arco-íris. 
//Utilize um enum para isso.

type Pessoa = {
    nome : string,
    idade : number,
    corFavorita : string
}

enum CorArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const person1 : Pessoa = {
    nome :"Maria",
    idade : 21,
    corFavorita : CorArcoIris.ANIL
}

const person2 : Pessoa = {
    nome : "João",
    idade : 44,
    corFavorita : CorArcoIris.AMARELO
}

const person3 : Pessoa = {
    nome : "Alcides",
    idade : 67,
    corFavorita : CorArcoIris.VERMELHO
}

console.table(person3)
