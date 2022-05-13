// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// //EXERCÍCIO 01 
// function retornaTamanhoArray(array) {
//     let tamanhoDaLista = array.length
//     return tamanhoDaLista
// }

// // EXERCÍCIO 02
// function retornaArrayInvertido(array) {
//   let arrayInvertido = array.reverse()
//   return arrayInvertido
// }

// /////////  DESAFIO///////////
//   let arrayInvertido = []
//   for (let i = -1; i < array.length; i++) {
//     arrayInvertido.push(array.length)
//     console.log(arrayInvertido)
//     //return arrayPop
//   }
// }

// EXERCÍCIO 03
// function retornaArrayOrdenado(array) {
//   let arrayOrdenado = array.sort(function(a,b) {
//         return a -b
//     })
//     return arrayOrdenado
//       }

// /////////// TEM DESAFIO///////////

// //EXERCÍCIO 04
// function retornaNumerosPares(array) {
//     let arrayPares = array.filter((validaPar) => {
//         return validaPar % 2 === 0
//     })
//     return arrayPares
// }

// //EXERCÍCIO 05
// function retornaNumerosParesElevadosADois(array) {
//     let arrayPares = array.filter((validaPar) => {
//         return (validaPar % 2 === 0)
//     })

//     let arrayParesAoQuadrado = arrayPares.map((numeros) => {
//         return (Math.pow(numeros, 2))
//     })
//     return arrayParesAoQuadrado
// }

// //EXERCÍCIO 06
// function retornaMaiorNumero(array) {
//     let maiorNumero = -Infinity
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > maiorNumero) {
//             maiorNumero = array[i]
//         }
//     }
//     return maiorNumero
// }

// // EXERCÍCIO 07
// function retornaObjetoEntreDoisNumeros(num1, num2) {
//     let atributo1
//     let atributo2
//     let atributo3
//     if (num1 < num2) {
//         atributo1 = num2
//         atributo2 = (num2 % num1 === 0)
//         atributo3 = (num2 - num1)
//     } else {
//         atributo1 = num1
//         atributo2 = (num1 % num2 === 0)
//         atributo3 = (num1 - num2)
//     }
//     let objeto = {
//         maiorNumero: atributo1,
//         maiorDivisivelPorMenor: atributo2,
//         diferenca: atributo3
//     }
//     return objeto
// }

//EXERCÍCIO 08
// function retornaNPrimeirosPares(n) {
//     let arrayPares = []
//     for (let i = 0; i < n; i++) {
//         let numeros = i * 2
//         arrayPares.push(numeros)
//     }
//     return arrayPares
// }

//EXERCÍCIO 09
// function classificaTriangulo(ladoA, ladoB, ladoC) {
//     let tipoTriangulo
//     if (ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
//         tipoTriangulo = "Equilátero"
//     } else if
//         (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA) {
//         tipoTriangulo = "Escaleno"
//     } else {
//         (ladoA === ladoB || ladoB === ladoC && ladoC !== ladoA)
//         tipoTriangulo = "Isósceles"
//     }
//     return tipoTriangulo
// }

// // EXERCÍCIO 10
// function retornaSegundoMaiorESegundoMenor(array) {
//     function ordenar(a, b) {
//         return (a - b)
//     }
//     array.sort(ordenar)
//     segundoMaior = array[array.length - 2]
//     segundoMenor = array[1]
//     return [segundoMaior, segundoMenor]
// }

// // EXERCÍCIO 11
// function retornaChamadaDeFilme(filme) {
//     return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`
// }

// // EXERCÍCIO 12
// function retornaPessoaAnonimizada(pessoa) {
//   let objeto = {
//     nome: pessoa.nome,
//     idade: pessoa.idade,
//     email: pessoa.email,
//     endereco: pessoa.endereco
//   }
//   let novoObjeto = { ...objeto, nome: "ANÔNIMO" }
//   return novoObjeto
// }

// // EXERCÍCIO 13A
// function retornaPessoasAutorizadas(pessoas) {
//   const pessoasAutorizadas = pessoas.filter((iten, index, array) => {
//     return iten.altura >= 1.5 && iten.idade > 14 && iten.idade < 60
//   })
//   return pessoasAutorizadas
// }

// // EXERCÍCIO 13B
// function retornaPessoasNaoAutorizadas(pessoas) {
//   const pessoasNaoAutorizadas = pessoas.filter((iten, index, array) => {
//     return iten.altura < 1.5 || iten.idade <= 14 || iten.idade > 60
//   })
//   return pessoasNaoAutorizadas
// }

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  // Soma compras e cria um array com os totais
  let saldo = contas.map((item) => {
    return item.compras.reduce((valor1, valor2) => {
      return valor1 + valor2
    }, 0)
  })
  //subtrai o saldo do total de compras
  for (let i = 0; i < contas.length; i++) {
    contas[i].saldoTotal -= saldo[i]
    contas[i].compras = []
  }
  return contas
}



// }

// // EXERCÍCIO 15A
// function retornaArrayOrdenadoAlfabeticamente(consultas) {
//   consultas.sort(function (a, b) {
//     return (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
//   })
//   return consultas
// }


// // EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
//   for (let i = 0; i < consultas.length; i++) {
//     consultas.dataDaConsulta[i].slpit("/")
//   }
//   console.log(consultas[0].dataDaConsulta[0])
// }