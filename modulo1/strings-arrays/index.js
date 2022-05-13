// EXERCICIO DE INTERPRETAÇÃO DE CODIGOS

//Exercicio 1

a. undefined
b. null
c. 11
d. 3
e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
f. 9

 SUBI NUM ONIBUS EM MIRROCOS 5


// EXERCICIO DE ESCRITA DE CODIGOS

//Exercicio 1

let name = prompt("Digite se nome")
let email = prompt("Digite seu email")
console.log("O email", email, "foi cadastrado com sucesso. Seja bem-vinda(o)," , name,"!")

//Exercicio 2

let comidas=['pizza' , 'hamburguer' , 'lasanha' , 'arroz' , 'batata']
console.log(comidas)
console.log('Essas são as minhas comidas preferidas')
console.log(`${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)
let comidasusuario=prompt("Qual a sua comida preferida?")
comidas.splice(1,1)
comidas.push(comidasusuario)
console.log(`${comidas[0]}
${comidas[1]}
${comidas[2]}
${comidas[3]}
${comidas[4]}`)

//Exercicio 3

let listaDeTarefas=[]
let tarefa1=prompt("Qual a primeira tarefa?)")
listaDeTarefas.push(tarefa1)
let tarefa2=prompt("Qual a segunda tarefa?)")
listaDeTarefas.push(tarefa2)
let tarefa3=prompt("Qual a terceira tarefa?)")
listaDeTarefas.push(tarefa3)
console.log(listaDeTarefas)
let escolhaTarefa=Number(prompt(`Qual tarefa já executou? 0.${tarefa1}, 1.${tarefa2} ou 2.${tarefa3}`))
listaDeTarefas.splice(escolhaTarefa,1)
console.log(listaDeTarefas)


// DESAFIO

//Exercicio1

let frase = prompt("Digite uma frase")
frasesplit=frase.split(' ')
console.log(frasesplit)

//Exercicio2

let array=["Banana","Morango","Abacaxi","Laranja","Ameixa"]
let filtro=array.indexOf("Abacaxi")
let indice=array[filtro]
tamArray=indice.length
console.log(`Indice: ${filtro}, Tamanho: ${tamArray}`)
