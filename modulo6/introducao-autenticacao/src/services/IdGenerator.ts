// Exercício 1

// b)

import { v4 } from "uuid"

export class IdGenerator {
    public generateId = () => {
        return v4()
    }
}