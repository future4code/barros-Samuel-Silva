//EXERCICIO 1

// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
// Usando o método "process.argv juntamente com a posição do dado inserido []"

// b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:

const nameUser = process.argv[2]
const ageUser = Number(process.argv[3])
let ageFuture = 0

function newAge () {
    if (isNaN(ageUser)) { 
        console.log(`\x1b[31m Operação invalida! Esperava 2 parâmetros, só recebi um.`)
    } else {
        ageFuture = (ageUser + 7);
        console.log("\x1b[31m",`Olá, ${nameUser}!\x1b[34m Você tem ${ageUser} anos.\x1b[33m Em sete anos você terá ${ageFuture}`)
    }
}
newAge()