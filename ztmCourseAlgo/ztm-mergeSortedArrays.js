let arr1 = [0, 3, 4, 31, 72, 101, 1000]; 
let arr2 = [4, 6, 30, 40, 50, 60];

function mergeSortedNumbers(arr1, arr2) {
    let merged = []; 
    let j = 0;
    for(let i = 0; i <=arr1.length; i++) {
        
        if(arr1[i] <= arr2[j]) {
            merged.push(arr1[i]); 
        } else {
            merged.push(arr2[j]); 
            j++; 
        }
    }
    
    console.log(merged); 
    
}
mergeSortedNumbers(arr1, arr2); 

//======================================================================================
// ----V2, seems more elegant. ----
let arr1=[1, 2, 4, 4, 5, 17, 21];
let arr2=[2, 3, 4, 100, 1000, 2000, 3000]; 

function mergeArrays(a1, a2) {
let i = 0; 
let j = 0;  
let endOfArray = false; 
let result = []; 

do {
    // check if we should continue.  
    if(i === a1.length || j === a2.length) { endOfArray = true;} 
    
    //If value at i of a1 is less than index value j of a2, push the lower value into the result. increment i. 
    if(a1[i] < a2[j]) {
        result.push(a1[i]); 
        i++;  
    //If values are the same, push both to the array.  increment both i and j. 
    } else if (a1[i] === a2[j]) {
        result.push(a1[i]); 
        result.push(a2[j]); 
        i++; 
        j++; 
    //If value at arr2[j] is less than arr1[i], push the lower value from j to result. increment j.   
    } else {
        result.push(a2[j]); 
        j++; 
        
    }
} while(endOfArray === false); 
    return result; 
}

mergeArrays(arr1, arr2); 


//================================================================================================
//-----LOGIC I'VE GROKKED FOR THIS. ------

// is 4 less than or equal to 0?  no.  push 0.  
// is 4 less than or equal to 3?  no, push 3.  
// is 4 less than or equal to 4?  yes.  
    // push both arr1's 4, and arr2's 4.     
// push four from arr2 and move j up one.  
    // increment i by one (next value of arr2 MUST be greater than current value of arr1, as it's sorted arrays).  
// is 6 <  31 ? yes, push 6.  
    // increment j by 1. 
// is 30 < 31?  yes, push 30.   

// how to deal with end of array?  

