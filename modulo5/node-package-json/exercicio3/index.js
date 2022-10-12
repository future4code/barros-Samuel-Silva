//EXERCICIO 3

const job = process.argv[2]
const list = ["Lavar a louça", "Comprar Leite"]
    list.push(job);
console.log("Tarefa adicionada com sucesso!:");
console.table(list)
