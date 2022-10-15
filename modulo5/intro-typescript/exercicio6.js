const userInput = require("readline-sync");
const num1 = userInput.question("Insira um número: ");
const num2 = userInput.question("Insira outro número: ");
function comparaNumero(num1, num2) {
    let soma = num1 + num2;
    let subt = num1 - num2;
    let mult = num1 * num2;
    if (num1 > num2) {
        console.log(`O primeiro número é maior que o segundo`);
    }
    else if (num1 < num2) {
        console.log(`O segundo número é maior que o primeiro`);
    }
    else {
        console.log(`Os números são iguais`);
    }
    console.log(`A soma dos números é ${soma} `);
    console.log(`A subtração dos números é ${subt} `);
    console.log(`A multiplicação dos números é ${mult} `);
}
comparaNumero();
//# sourceMappingURL=exercicio6.js.map