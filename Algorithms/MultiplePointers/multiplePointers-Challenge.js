// Challenge description: 
// Implement a function that takes a sorted array, and returns the number of unique values in the array
// there can be negative values within the array , but it will always be sorted.  


// This do while is my version.  The for loop version below is the way the course wanted it.  
function countUniqueValues(arr) {
    let pointerA = 0; 
    let pointerB = 1;
    
    do {
        if(arr[pointerB] !== arr[pointerA]) {
            pointerA++; 
            arr[pointerA] = arr[pointerB]; 
        } else {
            pointerB++;  
        }  
        
    } while(pointerB !== arr.length); 
    return pointerA+1;
}
countUniqueValues([1,2,3,4,5]); 




function countUniqueValues(arr) {
    let i = 0;
   	for(let j = 1 ; j < arr.length ; j++){ 
        if(arr[i] !== arr[j]) { 
            i++; 
            arr[i] = arr[j];  
    	}
    }   
    return i+1; 
} 
    