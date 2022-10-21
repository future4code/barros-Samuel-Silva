//EXERCICIO 2

const operation = process.argv[2];
const num1 = Number(process.argv[3]);
const num2 = Number(process.argv[4]);

function selector(operation) {
    switch (operation) {
                case "add": 
                console.log(`\x1b[33m Resposta: \x1b[32m ${(num1+num2)}`)
                break;
                case "sub": 
                console.log(`\x1b[33m Resposta: \x1b[32m ${(num1-num2)}`)
                break;
                case "mult": 
                console.log(`\x1b[33m Resposta: \x1b[32m ${(num1*num2)}`)
                break;
                case "div": 
                console.log(`\x1b[33m Resposta: \x1b[32m ${(num1/num2)}`)
                break;
                default:
                console.log(`\x1b[31m Operação inválida!`)
                break
            }
        
        }
      selector(operation)
