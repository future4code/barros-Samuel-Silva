import { CustomError } from "./CustomError";

export class InvalidTitle extends CustomError {
    constructor() {
        super(400, "O Título deve conter ao menos 6 caracteres!")
    }
}

export class InvalidDescription extends CustomError {
    constructor() {
        super(400, "A descrição precisa ter no mínimo 10 caracteres!")
    }
}

export class InvalidLauch extends CustomError {
    constructor() {
        super(400, "A data de lançamento de ser no formato dd/mm/aa!")
    }
}

export class MovieNotFound extends CustomError {
    constructor() {
        super(404, "Filme não encontrado")
    }
}