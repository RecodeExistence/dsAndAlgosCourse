// Data structures can be built from scratch.  Below is a good idea of how an array would work under the hood. 


class MyArray {
    constructor() {
      this.length = 0; 
      this.data = {}; 
    }
  
    get(index) {
      return this.data[index]; 
    }
  
    push(value) {
      this.data[this.length] = value; 
      this.length++; 
      return this.length; 
    }
  
    pop() {
      const lastItem = this.data[this.length-1]; 
      delete this.data[this.length-1]; 
      this.length--; 
      return lastItem; 
    }
  
    delete(index) {
      const item = this.data[index]; 
      this.shiftItems(index); 
    }
  
    shiftItems(index) {
      for(let i = index; i<this.length-1;i++) {
        this.data[i] = this.data[i++]; 
      }
      if(this.length === 0) {
        console.log('Error - cannot delete.  Array is empty.')
        return; 
      }
      delete this.data[this.length-1]; 
      this.length--;  
    }
  }
  
  const arrMyTestArray = new MyArray(); ;
  arrMyTestArray.delete(1); 
  console.log(arrMyTestArray);
  