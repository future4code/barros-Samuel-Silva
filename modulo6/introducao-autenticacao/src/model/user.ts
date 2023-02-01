export type user = {
   id: string
   email: string
   password: string
}

export interface UserInputDTO {
   email: string,
   password: string
}

export interface LoginInputDTO {
   email: string,
   password: string
}

export interface GetUserInputDTO {
   id: string
}

export interface GetUserInput {
   email: string,
   id: string
}

//Exercício 2

//b)

export type AuthenticationData = {
   id: string
}