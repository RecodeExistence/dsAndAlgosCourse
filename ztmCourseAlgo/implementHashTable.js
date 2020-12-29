class newHashTable {
    constructor(hashTableSize) {
      this.dataStructure = new Array(hashTableSize); 
    };
    
    _hash(key) {
      let hash = 0; 
      for(let i=0;i<key.length;i++) {
        hash = (hash+key.charCodeAt(i ) * i) % this.dataStructure.length; 
      }
      return hash; 
    }; 
    set(key, val) {
    let memAddress = this._hash(key); 
        if(!this.dataStructure[memAddress]) {
        this.dataStructure[memAddress] = [];
        this.dataStructure[memAddress].push([key,val]);  
    }
        this.dataStructure[memAddress].push([key,val]);
        return this.dataStructure;  
}
  
    get(key) {
      let memAddress = this._hash(key)
      const currentAddress = this.dataStructure[address]; 
      console.log(currentAddress); 
    }
  }
  
  const myHashTable2 = new newHashTable(100); 
  myHashTable2.set("test", "value"); 
  myHashTable2.set("apples", "moarApples"); 
  myHashTable2.get("apples"); 