/* Implementing a stack in an array in Javascript is very simple, as arrays come with 
 predefined methods to make our life easier, including length, push and pop.

 The trade of here of course is performance.  Easy set up, but O(N) time complexity 
 on the pop, as we'd have to re-index the array.  
Also if the value we're pushing makes the array longer than it's already dimmed length, 
 we have to double up the array length in memory before we can push to it, so 
space complexity can be an issue.  */

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
