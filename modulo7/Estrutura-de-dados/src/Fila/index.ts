import { Fila } from './Fila';
let fila = new Fila();

//console.log(fila.isEmpty()); // retorna 

fila.enqueue(1);
fila.enqueue(2);
fila.enqueue(3);
console.log(fila.isEmpty()); // retorna 

console.log(fila.front()); // retorna 
fila.dequeue(); // retorna 
console.log(fila.front()); // retorna 
console.log(fila.dequeue()); // retorna 
console.log(fila.front()); // retorna 
console.log(fila.dequeue()); // retorna 

console.log(fila.size()); // retorna 
console.log(fila.isEmpty()); // retorna 
