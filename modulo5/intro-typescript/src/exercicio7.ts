//EXERCICIO 7

//Escreva um programa que converta uma string de DNA em uma string de RNA. 
//Para os exemplos acima, a entrada seria "ATTGCTGCGCATTAACGACGCGTA" e a saída "UAACGACGCGUAAUUGCUGCGCAU"

function convDna (): void {
const dna:string = "ATTGCTGCGCATTAACGACGCGTA";
const newDna = dna.replace("A", "U").replace("T","A").replace("C","G").replace("G","C");
console.log(newDna)
}

convDna()