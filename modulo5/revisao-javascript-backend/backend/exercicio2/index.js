console.log("Exercício 2");

console.log("Cadastrar Clientes");

const clients = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const newClient = (idClient, nameClient) => {
    if (clients.indexOf(idClient) !== -1) {
        console.log(`Erro ${clients.indexOf(idClient)}. Parâmetro inválido! (id ${idClient} já existe) `);
    } else {
        console.log("Cliente cadastrado com sucesso!")   
        clients.push({id: idClient, nome: nameClient})
        console.log(idClient)
    }
}
    newClient(1, "Maria") 
console.log(clients)


console.log("Gerador de tabuada");

const calculator = (multiple = 1) => {
    let total0 = multiple * 0;
    let total1 = multiple * 1;
    let total2 = multiple * 2;
    let total3 = multiple * 3;
    let total4 = multiple * 4;
    let total5 = multiple * 5;
    let total6 = multiple * 6;
    let total7 = multiple * 7;
    let total8 = multiple * 8;
    let total9 = multiple * 9;
    let total10 = multiple * 10;

    if (typeof multiple !== "number") {
        return (console.log("Erro. Parâmetro inválido! (deve ser um número)")
        )
    } if (multiple >10  || multiple < 1) {
        return (console.log("Erro. Parâmetro inválido! (número precisa valer entre 1 e 10)")
        )
    } else {(typeof multiple === "number") 
        return  [
            `${multiple} x 0 = ${total0}`,
            `${multiple} x 1 = ${total1}`,
            `${multiple} x 2 = ${total2}`,
            `${multiple} x 3 = ${total3}`,
            `${multiple} x 4 = ${total4}`,
            `${multiple} x 5 = ${total5}`,
            `${multiple} x 6 = ${total6}`,
            `${multiple} x 7 = ${total7}`,
            `${multiple} x 8 = ${total8}`,
            `${multiple} x 9 = ${total9}`,
            `${multiple} x 10 = ${total10}`,
        ]
    }
}
 console.log(calculator())