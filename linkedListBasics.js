class Node {
    constructor(value, next) {
        this.value = value; 
        this.next = null; 
    }
}

const newNode = new Node(10); 
console.log(newNode); 
class LinkedList {
constructor(value) {
    this.head = {
        value: value, 
        next: null
    }
    this.tail = this.head; 
    this.length = 1; 
    return this; 
}

append(value) {
    const newNode = {
        value: value, 
        next: null
    }
    this.tail.next = newNode; 
    this.tail = newNode; 
    this.length++; 
    return this; 
}



prepend(value) {
    const newNode = {
        value: value, 
        next: null
    }
    newNode.next = this.head; 
    this.head = newNode; 
    this.length++; 
    return this; 
}

insert(index, value) {
    let count = 0;
    let currentNode = this.head; 

    const newNode = {
        value: value, 
        next: null
    }
    
    if(typeof(index) === "number" && index >= this.length) {
        this.append(value); 
    } else {
        currentNode = currentNode.next; 
        count++; 
    
        while(currentNode) {
            if(count === index) {
                const leader = currentNode; 
                newNode.next = leader.next;   
                leader.append(newNode); 
            }
        }
    }
}
        
printList() {
    const arrNodeValues = []; 
    let currentNode = this.head;  

    while(currentNode !== null) {
        arrNodeValues.push(currentNode.value); 
        currentNode = currentNode.next; 
    }
    return arrNodeValues; 
    }
}; 

const myLL = new LinkedList("new list");
myLL.append("testvalue"); 
myLL.prepend("Hello World"); 

console.log(myLL); 
console.log(myLL.printList()); 
