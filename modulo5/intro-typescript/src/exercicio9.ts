//EXERCICIO 9

//Escreva uma função que valida se uma pessoa pode ser estudante da Labenu. 
//Para isso a função deve receber como parâmetro as respostas dessas 4 perguntas:
//- Qual a sua idade?
//- Você possui ensino médio completo?
//- Quantas horas você tem disponível na semana para o curso?
//- O seu curso será o “integral” ou “noturno”?

function subscription():void {
    const userInput = require("readline-sync");
    const age:number = userInput.question("Qual a sua idade? ");
    const study:string = userInput.question("Voce possui ensino medio completo? ");
    const hours:number = userInput.question("Quantas horas voce tem disponivel na semana para o curso? ");
    const shift:string = userInput.question("O seu curso sera o INTEGRAL ou NOTURNO? ");

    const upperShift = shift.toUpperCase()
    const upperStudy = study.toUpperCase()

    const fontYellow = "\033[1;33m"
    const fontRed = '\033[0;31m';

    if ((age >= 18) && (upperStudy === "SIM") && (hours >= 20) && (upperShift === "INTEGRAL" || "NOTURNO")) {
        console.log(fontYellow + "PARABENS! Voce esta apto a fazer o curso na Labenu!")
        console.log(age)
        console.log(upperStudy)
        console.log(hours)
        console.log(upperShift)
    } else {
        console.log(fontRed + "Infelizmente voce nao preenche todos os requisitos.")
        console.log(age)
        console.log(upperStudy)
        console.log(hours)
        console.log(upperShift)
    }
}

subscription()