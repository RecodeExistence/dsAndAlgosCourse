// How to build a Queue in Linked Lists in JavaScript.   

//Node Class for easy node creation in queue class.   
class Node {
    constructor(value) {
        this.value = value;  
        this.next = null;  
    }
}

class Queue {
    constructor() {
        this.first = null;  
        this.last = null;  
        this.length = 0;  
    }

    // Simply look at (peek) the first item in the queue;  
    peek() {
        return this.first;  
    }

    // Add value to the queue. - working as intended.   
    enqueue(value) {
        let newNode = new Node(value);
        if(this.length === 0) {
            this.first = newNode; 
            this.last = newNode;  
             
        } else {
            // point to the node one behind the last node, and assign that to be the newNode we've made (so the NEXT last will be newNode)
            this.last.next = newNode;
            // then update current last pointer to point at the new last we just made.  

             //            V  (V is an arrow POINTER pointing at current last.)            
            //             a (front of queue).  
            //add b:      (this.last.next (a is currently last, so look at the point behind it in queue) = b)
            
            //             V (pointer for last still pointing at a, as it's was only element in queue.)
            //         b   a (b is now this.last.next : that is a which is first and last for now, it's last next in queue)_
            
            //         V   (updated pointer for LAST to point at the new last)
            //         b   a  
            this.last = newNode; 
        }
        this.length++;  
        return this;  
    // define new node          
    }

    dequeue() {
        // point this . first pointer at next front of queue (which would be null, removing the pointer to whatever value was in the front of the queue). 
        this.first = this.first.next 
        // 
        this.first.next = null;
        
        return this; 
    }

   
};

 
const myQueue = new Queue();   
myQueue.enqueue("test");
myQueue.enqueue("test2");
myQueue.enqueue("test3"); 
myQueue.enqueue("test4");  
console.log(myQueue); 

console.log(myQueue.first.next); 
