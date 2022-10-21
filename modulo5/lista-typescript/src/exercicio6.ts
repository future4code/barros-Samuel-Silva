console.log("EXERCICIO 6:")

const listClients:Client[] =
[
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

type Client = {
    cliente:string,
    saldoTotal:number,
    debitos:number[]
}

function calculator(listClients:Client[]):number{
    for (let i=0; i < listClients.length; i++){
        let debClient:number = listClients[i].debitos.reduce((a:number,b:number)=> a+b,0)
        return debClient
        }

}
console.log(calculator(listClients))
