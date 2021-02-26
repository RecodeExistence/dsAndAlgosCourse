// LL Practice

// Create new node via this class.  
class Node {
    constructor(val) {
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}

// class to create new linkedlist.  
class LL {
    constructor(vInitialisingValue) {
        this.head = {
            val: vInitialisingValue,
            previous: null,
            next: null
        }

        this.tail = this.head;
        this.tail.previous = this.head;
        this.length = 1;
        return this;
    }


    // helper functions.  
    traverseToIndex(vIndexToTraverseTo) {
        let count = 0;
        let nCurrentNode = this.head;

        while (count !== vIndexToTraverseTo) {
            nCurrentNode = nCurrentNode.next;
            count++;
        }
        return nCurrentNode;
    }

    printList() {
        const arrListVals = [];
        let currentNode = this.head;

        while (currentNode !== null) {
            arrListVals.push(currentNode.val);
            currentNode = currentNode.next;

        }
        return arrListVals;
    }


    // Basically, CRUD functions.  
    append(vNewNodeValue) {
        const nNodeToInsert = new Node(vNewNodeValue);

        this.tail.next = nNodeToInsert;
        nNodeToInsert.previous = this.tail;
        this.tail = nNodeToInsert;
        this.length++;
        return this;
    }

    prepend(vValueToPrepend) {
        const newHead = new Node(vValueToPrepend);
        this.head.previous = newHead;

        newHead.next = this.head;
        this.head = newHead;
        this.length++;
        return this;
    }

    remove(vIndexToRemove) {
        if (vIndexToRemove <= 0) {
            this.head = this.head.next;
            this.length--;
            return this;
        }

        let nCurrentNode = this.traverseToIndex(vIndexToRemove - 1);
        let nTempNode = nCurrentNode.next;
        nCurrentNode.next = nTempNode.next;
        this.length--;
        return this;

    }


    insertAt(vIndexToInsertAt, vValueToInsert) {
        let count = 0;
        if (vIndexToInsertAt <= 0) {
            console.log("prepending");
            this.prepend(vValueToInsert);
        } else if (vIndexToInsertAt > this.length) {
            this.append(vValueToInsert)
        } else {
            let nCurrentNode = this.head;

            while (nCurrentNode !== null) {
                let nNodeToInsert = new Node(vValueToInsert);

                if (count === vIndexToInsertAt - 1) {
                    nNodeToInsert.previous = nCurrentNode;
                    nNodeToInsert.next = nCurrentNode.next;
                    nCurrentNode.next = nNodeToInsert;
                    this.length++;
                    return this;
                } else {
                    nCurrentNode = nCurrentNode.next;
                    count++;
                }
            }
            return this.printList();
        }
    }

}

const newLL = new LL("index1");
newLL.prepend("index0")
newLL.append("index2");
newLL.insertAt(2, "test");
newLL.remove(3);
console.log(newLL.printList());