console.log("Exercício 1")

function converter(grade, type) {
    if (typeof grade !== "number") {
        return "ERRO! Informar a temperatura em números!"
    }else{
    switch(type){
        case "K":
            const kelvin = grade + 273;
            return `${grade}° Celsius é equivalente a ${kelvin}° Kelvin.`;
            break; 
            case "F":
            const fahrenheit = grade * 1.8 + 32;
            return `${grade}° Celsius é equivalente a ${fahrenheit}° Farenheit.`;
            break; 
            default:
            return "Parâmetro inválido! Escolha entre F ou K";
        }
    }
}
    console.log(converter(10,"K"))
