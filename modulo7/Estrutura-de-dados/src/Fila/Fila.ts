export class Fila {
  private queue:any[]
  constructor() {
    this.queue = [];
  }
  
  // EXERCÍCIO 1
  enqueue(element:any) {
    this.queue.push(element);
  }
    
  remove() {
    if (this.isEmpty()){
      return "Underflow";
    }
    return this.queue.shift();
  }
 
  // retorna o primeiro elemento da fila
  front() {
    if (this.isEmpty()){
      return "Fila vazia";
    }
    return this.queue[0];
  }
  
  // retorna o tamanho da fila
  size() {
    return this.queue.length;
  }
  
  // verifica se a fila está vazia
  isEmpty() {
    return this.queue.length == 0;
  }
}
