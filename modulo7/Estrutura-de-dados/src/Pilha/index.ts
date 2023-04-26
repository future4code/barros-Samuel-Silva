import { Pilha } from "./Pilha";

const pilha = new Pilha();

console.log(pilha.isEmpty()); // retorna 
//empilhando
pilha.stackUp(1);
pilha.stackUp(2);
pilha.stackUp(3);

console.log(pilha.isEmpty()); // retorna 

console.log(pilha.peek()); // retorna 
console.log(pilha.unstack()); // retorna 
console.log(pilha.peek()); // retorna 
console.log(pilha.unstack()); // retorna 
console.log(pilha.peek()); // retorna 
console.log(pilha.unstack()); // retorna 

console.log(pilha.size()); // retorna 
console.log(pilha.isEmpty()); // retorna 
