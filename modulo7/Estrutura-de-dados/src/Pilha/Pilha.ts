export class Pilha {
   private stack:any[]
   constructor() {
     this.stack = [];
   }
   
   // adiciona um elemento ao topo da pilha    (empilhar)
   stackUp(element:any) {
     this.stack.push(element);
   }
   
   // remove o elemento do topo da pilha e o retorna
   unstack() {
     if (this.isEmpty())
       return "Underflow";
     return this.stack.pop();
   }
   
   // retorna o elemento do topo da pilha
   peek() {
     if (this.isEmpty())
       return "Pilha vazia";
     return this.stack[this.stack.length - 1];
   }
   
   // verifica se a pilha está vazia
   isEmpty() {
     return this.stack.length == 0;
   }
   
   // retorna o tamanho da pilha
   size() {
     return this.stack.length;
   }
 }
 