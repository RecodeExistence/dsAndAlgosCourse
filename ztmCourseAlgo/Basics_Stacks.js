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
    } else {
        this.bottom.next = this.top;  
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
}

traverseList(traverseToIndex) {
    let traversalNode = this.bottom; 
    let count = 0;  

    while(count < traverseToIndex) {
        if(count === traverseToIndex) {
            return traversalNode; 
        } else {
            traversalNode = traversalNode.next;  
            count++;  
        }
    } 
}
}


const newStack = new Stack(); 
newStack.push("test");
newStack.push("this"); 
newStack.pop(); 