class myHashTable {
	constructor(iSize) {
		this.data = new Array(iSize); 
	}

_hash(key) {
	let hash = 0; 
	for(let i = 0;i<key.length;i++) {
		hash = (hash + key.charCodeAt(i) * i) % this.data.length;
	}
		return hash; 
	}

	set(key) {
		let addr = _hash(key); 
		if(!this.data[addr]) {
			this.data[addr] = []; 
			this.data[addr].push([key,val]); 
		}
			this.data[addr].push([key,val]); 
			return this.data;
	}

	get(key) {
		let addr = this._hash(key) 
		const currentAddress = this.data[addr]; 
		console.log(currentAddress); 
	}
};

const hashTable = new myHashTable(10); 
hashTable.set("test", "value"); 
hashTable.set("apples", "moarApples"); 
hashTable.get("apples");
