export type user = {
  id: string;
  email: string;
  password: string;
  name: string;
  nickname: string;
  role: string
};

// adicionado enum para o atributo "role"
export enum  UserRole {
  ADMIN="ADMIN",  
  NORMAL="NORMAL"
}

export interface UserInputDTO {
  name: string;
  nickname: string;
  email: string;
  password: string;
  // adicionado "role" como aributo
  role: string
}

export interface LoginInputDTO {
  email: string;
  password: string;
}

export interface EditUserInputDTO {
  name: string;
  nickname: string;
  id: string;
  token: string;
}

export interface EditUserInput {
  name: string;
  nickname: string;
  id: string;
}

// EXERCICIO 1

//b)

export interface AuthenticationData {
  id: string;
  // adicionado o "role omo atributo
  role:string
}
