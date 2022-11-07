// EXERCICIO 2

//a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros
//RESPOSTA: Entradas - numeros / Saidas - maior, menor e media

type EstatisticType = {
    maior : number,
    menor : number,
    media : number
}

function obterEstatisticas(numeros:number[]):EstatisticType {

    const numerosOrdenados = numeros.sort(
        (a:number, b:number) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([2,5,9]))


//b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 
//RESPOSTA: soma, numeros Ordenados, estatisticas

type AmostraDeIdades = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => EstatisticType
}

const amostras:AmostraDeIdades = {
    numeros: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: obterEstatisticas
    }

console.log(amostras.obterEstatisticas(amostras.numeros))
