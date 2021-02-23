class Node {
    constructor(value) {
        this.value = value;  
        this.next = null ; 
    }
}

class Stack {
    constructor() {
        this.top = null; 
        this.bottom = null;  
        this.length = 0;  
    }

peek() {
    return this.length === 0 ? this.bottom : this.top; 
}

push(value) {
    let tempNode = new Node(value); 
    
    if(this.length === 0) {
        this.bottom = tempNode;
        this.top = tempNode; 
        this.bottom.next = this.top; 
    } else {
        this.top.next = tempNode; 
        this.top = tempNode; 
    }
    this.length++; 
    return this;  
}
pop() {
    let replaceNode = this.bottom;   
    let returnNode = this.top; 

    while(replaceNode){
        if(replaceNode.next === returnNode) {
            this.top = replaceNode;
            this.top.next = null;  
        }
        else {
            replaceNode = replaceNode.next;  
        }  
    }
    this.length--
    return returnNode;  
}

printList() {
    let arrValues = []; 
    let traversalNode = this.bottom;
        while(traversalNode !== null) {
            arrValues.push(traversalNode.value);
            traversalNode = traversalNode.next;  
        }
        return arrValues;    
    }

traverseTo(vIndexToTraverseTo) {
    let count = 0;  
    let traversalNode = this.bottom; 
        while(count !== vIndexToTraverseTo) {
            traversalNode = traversalNode.next;  
            count++; 
        }
        return traversalNode; 
    }

} 

const newStack = new Stack(); 
newStack.push("test");
newStack.push("this"); 
newStack.push("one");
newStack.push("two"); 
console.log(newStack.printList());
console.log(newStack.traverseTo(3)); 