console.log("EXERCICIO 3:")

enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type Film = {
    nameFilm: string,
    year: string,
    genre: string,
    score?: number
}

// const inputFilm = require("readline-sync");
// const nameFilm = inputFilm.question("Nome do filme: ");
// const year = inputFilm.question("Ano de lancamento: ");
// const genre = inputFilm.question("Genero: ");
// const score = inputFilm.question("Pontuacao no Metacritic: ");


function addFilm (){
    const film1:Film ={
        nameFilm:"Se foi...",
        year: "1989",
        genre: GENERO.DRAMA,
        score: 99
      }
      return film1
}

console.table(addFilm())