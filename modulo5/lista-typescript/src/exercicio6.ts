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
const updatedBalance = (list: Client[]): Client[] => {

    const balance = list.filter((client): Client => {

        let sum: number;

        if(client.debitos.length === 0){
            client.debitos = [0]
        }        
        if(client.debitos.length > 0){
            sum = client.debitos.reduce((a,b)=>{
                return a+b
            })
        }

        client.debitos = []
        client.debitos.push(sum)

        return client
    })

    const sumBalance = balance.filter((client): Client => {
        client.saldoTotal = client.saldoTotal - client.debitos[0]
        client.debitos = []
        return client
    })

    const negatives = sumBalance.filter((client)=>{
        if(client.saldoTotal < 0){
            return client
        }
    })

    return negatives
}

console.table(updatedBalance(listClients))