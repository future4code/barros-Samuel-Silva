// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt("Digite a altura do retâmgulo")
  const largura = prompt("Digite a largura do retâmgulo")
  console.log(altura * largura)
  
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = prompt("Qual o ano atual?")
  const anoNascimento = prompt("Qual o ano de seu nascimento?")
  console.log(anoAtual - anoNascimento)


}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  let quilo = prompt("Qual seu peso?")
  let altura1 = prompt("Qual sua altura?")
  let quiloNum = Number(quilo)
  let altura1Num = Number(altura1)
  return quiloNum / (altura1Num*altura1Num)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
let nome = prompt("Digite seu nome:")
let idade = prompt("Digite sua idade:")
let email = prompt("Digite seu email:")
console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

let cor1 = prompt("Digite uma cor")
let cor2 = prompt("Digite uma cor")
let cor3 = prompt("Digite uma cor")
let coresFavoritas = [cor1,cor2,cor3]
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let text = prompt("Digite uma palavra em minúsculo")
return text.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
let custo1 = prompt("Qual o custo do espetáculo?")
let ingresso = prompt("Qual o valor do ingresso?")
let custoConvert = Number(custo1)
let ingressoConvert = Number(ingresso)
return (custoConvert/ingressoConvert)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
let palavra1 = prompt("Digite a primeira palavra")
let palavra2 = prompt("Digite a segunda palavra")
let tamanhoPalavra1 = palavra1.length 
let tamanhoPalavra2 = palavra2.length 
return tamanhoPalavra1===tamanhoPalavra2  

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
let lista = prompt("Digite três palavras")
let primeiroElemento = array[lista.length, 0]
return primeiroElemento


}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
let lista1 = prompt("Digite três palavras")
let ultimoElemento = lista1.pop
return ultimoElemento  

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let trocaUltimo = array.pop(array[array.length -1])
  let trocaPrimeiro = array[0]
  array.shift(array[0])
  array.push(trocaPrimeiro)
  array.unshift(trocaUltimo)
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  let string1Alterada = string1.toLowerCase()
  let string2Alterada = string2.toLowerCase()
  igualdade = (string1Alterada === string2Alterada)
  return igualdade  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("Qual o ano atual?"))
  let anoNascimento = Number(prompt("Qual seu ano de nascimento?"))
  let anoEmissao = Number(prompt("Qual o ano de emissão de seu RG?"))
  let idade = anoAtual - anoNascimento
  let validadeRG =  anoAtual - anoEmissao


  
  //let vinteAnos = (idade <= 20) && (validadeRG >= 5)
  //let cinquentaAnos = (idade >= 21) || (idade <=50)  && (validadeRG >= 10)
  //let maisCinquentaAnos = (idade >= 51) && (validadeRG >= 15)
  
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anobissexto4 = (ano % 4 == 0) && (ano % 400 == 0)
 // console.log("resposta do 4",anobissexto4)
  let anobissexto100 = (ano % 400 == 0) && (ano % 100 == 0)
  return anobissexto100

  // console.log("resposta do 100",anobissexto100)
 // console.log(anobissexto4, anobissexto100)

}
// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
let maiorIdade = prompt("você tem mais de 18 anos? Sim ou Não")
let ensinoMédio = prompt("Você possui ensino médio? Sim ou Não")
let horario = prompt("Você possui disponibilidade exclusiva durante os horários do curso? Sim ou Não")
let inscricao = (maiorIdade==="sim") && (ensinoMédio==="sim") && (horario==="sim")
console.log(inscricao)


}