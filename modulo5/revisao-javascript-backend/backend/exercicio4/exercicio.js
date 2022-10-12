console.log("exercicio 4");

const primeiraLista = [
	{
		nome: "Banana"
	},
	{
		nome: "Laranja"
	}
]

const segundaLista= [
	{
		nome: "Laranja"
	},
	{
		nome: "Cebola"
	}
]



const geraItensUnicos = () => {
	const terceiraLista = [...primeiraLista,...segundaLista]
		const novaLista = new Set()
		terceiraLista.forEach((item)=>{
			novaLista.add(item.nome)
		})
		console.log([...novaLista.values()])
}

geraItensUnicos(primeiraLista, segundaLista)