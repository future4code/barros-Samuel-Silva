# _Estrutura de Dados_  

## EXERCÍCIO 1


- De acordo com o funcionamento  dos métodos apresentados na imagem abaixo, qual é a estrutura que está sendo representada? 


```sh
enqueue(element:any) {
    this.queue.push(element);
  }
    
  remove() {
    if (this.isEmpty()){
      return "Underflow";
    }
    return this.queue.shift();
  }
```

>R: Estrura de Fila, pois o elemento removido é o último do array (LIFO).



## EXERCÍCIO 2

- De acordo com o funcionamento  dos métodos apresentados na imagem abaixo, qual é a estrutura que está sendo representada? 

```sh
    add(value: any) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    remove(value: any) {
        let current = this.head;
        let previous = null;
        while (current) {
            if (current.value === value) {
                if (!previous) {
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return true;
            }
            previous = current;
            current = current.next;
        }
        return false;
    }
    
```

>R: Estrura de Lista, pois o elemento removido aponta para o próximo.


## EXERCÍCIO 3

- De acordo com o funcionamento  dos métodos apresentados na imagem abaixo, qual é a estrutura que está sendo representada? 

```sh
  stackUp(element:any) {
     this.stack.push(element);
   }
   
   unstack() {
     if (this.isEmpty())
       return "Underflow";
     return this.stack.pop();
   }
```

>R: Estrura de Pilha, pois o último elemento removido é o primeiro do array (FIFO).