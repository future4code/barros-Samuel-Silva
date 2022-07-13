```javascript
	function criarArrayNomesAnimais() {
2	    const animais = [
3	      { nome: "Cachorro", classificacao: "mamífero" },
4	      { nome: "Papagaio", classificacao: "ave" },
5	      { nome: "Gato", classificacao: "mamífero" },
6	      { nome: "Carpa", classificacao: "peixe" },
7	      { nome: "Pomba", classificacao: "ave" }
8	    ]
9	let nomeAnimais = animais.map(function(elemento) {
10	  return elemento.nome
11	})
12	
13	return nomeAnimais
14	}
15	```