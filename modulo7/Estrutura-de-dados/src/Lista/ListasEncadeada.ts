//criar estrutura de nó
export class Node {
    public value: any
    public next: Node | null
    constructor(value: any) {
        this.value = value;
        this.next  = null;
    }
} 
//criar estrutura da lista
export class LinkedList {
    private head: Node | null
    private size: number
    constructor() {
        this.head = null;
        this.size = 0;
    }
    ///retorna tamanho
    getSize() {
        return this.size;
    }
    //add no final da lista
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

    //remove valor definido
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
    
    //mostra lista
    print() {
        let current = this.head;
        if (current) {
            while (current) {
                console.log(current.value);
                current = current.next;
            }
        }else{
            console.log("lista vazia!");
        }
    }

    /////////////////////PARA PILHAS E LISTAS
    //remove valor do inicio da lista
    // removeStart() {
    //     if (this.head) {
    //         if (this.head.next) {
    //             this.head = this.head.next;
    //         } else {
    //             this.head = null;
    //         }
    //     } else {
    //         return false
    //     }
    // }
    // //remove valor do fim da lista
    // removeEnd() {
    //     if (this.head) {
    //         if (this.head.next) {
    //             let current = this.head;
    //             //percorre
    //             while (current.next) {
    //                 //verifica terceiro
    //                 if (!current.next.next) {
    //                     current.next = null
    //                     break;
    //                 }
    //                 current = current.next;
    //             }

    //         } else {
    //             this.head = null;
    //         }
    //         this.size--;
    //     } else {
    //         return false
    //     }
    // }
}

