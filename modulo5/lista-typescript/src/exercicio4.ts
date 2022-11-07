console.log("EXERCICIO 4:")

enum Sector {
    MARKETING = "marketing",
    VENDAS = "vendas",
    FINANCEIRO = "financeiro",
}

type Person = {
    nome:string,
    salário: number,
    setor: string,
    presencial: boolean
}

const employees:Person[] = [
	{ nome: "Marcos", salário: 2500, setor: Sector.MARKETING, presencial: true},
	{ nome: "Maria" ,salário: 1500, setor: Sector.VENDAS, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: Sector.FINANCEIRO, presencial: true},
	{ nome: "João" ,salário: 2800, setor: Sector.MARKETING, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: Sector.FINANCEIRO, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: Sector.VENDAS, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: Sector.MARKETING, presencial: true}
]

function filterSector (element:Person) {
    return (element.presencial === true && element.setor === Sector.MARKETING)
}

const newArray:Person[] = employees.filter(filterSector)
console.table(newArray)

