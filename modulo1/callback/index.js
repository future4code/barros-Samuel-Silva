/*
Exercícios de interpretação de código

1. Resposta: nome: "Amanda Rangel", apelido: "Mandi", nome: "Laís Petra", apelido: "Laura", nome: "Letícia Chijo", apelido: "Chijo"

2. Resposta: Amanda Rangel, Mandi, Laís Petra, Laura, Letícia Chijo

3. Resposta: Mandi, Laura

*/

// Exercícios de escrita de código

// Exercício 1

// a) ok!

const pets = [
   { nome: "Lupin", raca: "Salsicha"},
   { nome: "Polly", raca: "Lhasa Apso"},
   { nome: "Madame", raca: "Poodle"},
   { nome: "Quentinho", raca: "Salsicha"},
   { nome: "Fluffy", raca: "Poodle"},
   { nome: "Caramelo", raca: "Vira-lata"},
]
  
const novoPets = pets.map ((item) => {
    return item.nome 
})

// b) ok!

const racaPets = pets.filter ((item) => {
    return item.raca === 'Salsicha'
})

// c)

const racaPoodle = pets.filter ((item,index,array) => {
    return item.raca === 'Poodle'
})
    const nomesPoodle = racaPoodle.map ((item,index,array) => {
        return item.nome
    })
    console.log(nomesPoodle)
    for (pet of nomesPoodle) {
        let i = 0; i < nomesPoodle.length;i++
        let nomeDoPet = nomesPoodle
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${nomeDoPet}!`)       ////BUGUEI AKI
    
    }
    
    
     
//EXERCICIO 2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a) ok!
const nomeDeProduto = produtos.map ((iten, index, array) => {
    return iten.nome
})

//b) ok!
function darDesconto (produto) {
    let precoComDesconto= produto.preco - (produto.preco * 0.05)
    return {"nome": produto.nome,"preco":precoComDesconto.toFixed(2)}
}
let listaDesconto = produtos.map(darDesconto)
console.log(listaDesconto)

//c) ok!

const listaBebidas = produtos.filter ((iten,index,array) => {
    return iten.categoria === `Bebidas`
} )
console.log(listaBebidas)

//d) ok!

let itens = []
function listaYpe (iten) {
    return iten.nome.includes("Ypê")
      }
 console.log(produtos.filter(listaYpe))

//e) ok!


function enviarFrase(produtoYpe){
let frase = `Compre ${produtoYpe.nome} por ${produtoYpe.preco}`
return frase
}

let novoArray=produtos.filter(listaYpe).map(enviarFrase)
console.log(novoArray)
