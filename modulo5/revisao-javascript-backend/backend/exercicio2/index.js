console.log("Exercício 2");

const clients = [
	{ id: 1, nome: "Fulano" },
	{ id: 2, nome: "Ciclano" },
	{ id: 3, nome: "Beltrano" },
	{ id: 4, nome: "Fulana" }
]

const newClient = (idClient, nameClient) => {
    if (clients.indexOf(idClient) === -1 ){
        return "Erro. Paclientsrâmetro inválido! (id já existe)"
    } else {
        console.log(idClient)
        //console.log(nameClient)

    clients.push({id: idClient, nome: nameClient})
    }
}
    newClient( 5, "Zé") 
console.log(clients)