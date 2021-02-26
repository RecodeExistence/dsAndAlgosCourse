class Node {
    constructor(val) {
        this.value = val; 
        this.next = null; 
    }
}

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

    prepend(vValToPrepend) {
        if(typeof(vValToPrepend) === "object") {
            const newNode = vValToPrepend;
            newNode.next = this.head; 
            this.head = newNode; 
            this.length++; 
            return this; 
        } else {
            const newNode = new Node(vValToPrepend);
            newNode.next = this.head; 
            this.head = newNode; 
            this.length++; 
            return this;  
        }
        
    }

    append(vValToAppend) {
        const newNode = new Node(vValToAppend); 
        this.tail.next = newNode;
        this.tail = newNode;  
        this.length++; 
        return this; 
    }

    insert(vIndexToInsertAt, vNodeToInsert) {
        if(vIndexToInsertAt > this.length) {
            console.log("Index > list length.  Appending."); 
            this.append(vNodeToInsert);
        }

        else if(vIndexToInsertAt < this.length) {
            console.log("Index < list length.  Prepending"); 
            this.prepend(vNodeToInsert);

        } else {
            console.log("Inserting.");
            let iCount = 0; 
            let nCurrentNode = this.head;
        
            while(nCurrentNode !== null) {
                if(iCount === vIndexToInsertAt-1) {
                    vNodeToInsert.next = nCurrentNode.next;  
                    nCurrentNode.next = vNodeToInsert; 
                    return this; 
                } else {
                    nCurrentNode = nCurrentNode.next; 
                    iCount++; 
                }
            }

        }
    }
    
   remove(vIndexToRemoveFrom) {
       // Deal with deleting from the start of the list. 
       if(vIndexToRemoveFrom === 0) {
           this.head = this.head.next; 
           this.length--; 
           return this.printList(); 
       }
       const leadNode = this.traverseToIndex(vIndexToRemoveFrom-1);
       const tempNode = leadNode.next;  
       leadNode.next = tempNode.next; 
       this.length--;  
       return this.printList();
   }
 
    printList() {
        const arrListValues = []; 
        let currentNode = this.head; 

        while(currentNode != null) {
            arrListValues.push(currentNode.value);
            currentNode = currentNode.next;  
        }
        return arrListValues; 
    }

    traverseToIndex(index) {
        let counter = 0; 
        let currentNode = this.head; 
        while(counter !== index) {
            currentNode = currentNode.next;
            counter++; 
        }
        return currentNode; 
    }
}

const LL = new LinkedList(1); 
LL.append("A"); 
LL.append("B");
LL.append("C");
LL.append("D");
console.log(LL.remove(4)); 

