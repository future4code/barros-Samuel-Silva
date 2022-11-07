console.log("EXERCICIO 7:")

const products: InProduct[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

type InProduct = {
    nome:string,
    quantidade:number,
    valorUnitario: number
}

type OutProduct = {
    nome:string,
    quantidade:number,
    valorUnitario: string
}

const ajustaPreco = (preco:number):string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')

	return "R$ "+valorAjustado
}

const productsAjusted = (list:InProduct[]):OutProduct[] => {

    let products: OutProduct[] = []
 
    for(let i = 0; i < list.length; i++){
    products.push({nome: list[i].nome, quantidade: list[i].quantidade, valorUnitario: ajustaPreco(list[i].valorUnitario)})
    }

let orderProdutcs = products.sort(function(a,b){
    return (a.quantidade - b.quantidade)
    });
    
    return orderProdutcs
}

console.table(productsAjusted(products))

