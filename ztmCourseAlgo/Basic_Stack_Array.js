// Implementing a stack in an array in Javascript is very simple, as arrays come with 
// predefined methods to make our life easier, including length, push and pop.  

class Stack {
    constructor() {
        this.array = [];  
    }

peek() {
    return this.array[this.array.length-1]; 
    }

push(value) {
    return this.array.push(value); 
}

pop(value) {
    return this.array.pop(value); 
    }
}

const arrStack = new Stack();  
