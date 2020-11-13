// TASK: Given 2 arrays , create a function that let's a user know (boolean return) whether these two arrays contain any common items.  
// Approaches?  Good opportunity for a frequency counter pattern - scales well, or a multiple pointers approach for comparison.  

/* Example of a True return - both arrays have a common item.  
    const arrTrueReturn1 = ["a", "b", "c", "d"]; 
    const arrTrueReturn2 = ["e", "f", "g", "b"];
    The above will return true because we have a common value in both arrays.    

Example of a false return - both arrays have a common item.  
    const arrFalseReturn1 = ["a", "b", "c", "d"]; 
    const arrFalseReturn2 = ["e", "f", "g", "h"];
    The above will return false because we don't have a common value in both arrays.  
    
    Inputs:  2 individual arrays, in this case.  
    Outputs:  Returns true or false.  
    */



//BRUTE FORCE METHOD: Nested For Loop - Quadratic Time - n^2. (caused by nested loops.)  Not efficient.  

const checkHasCommonVals = (vArr1, vArr2) => {
    for(let i = 0; i < vArr1.length; i++) {
        for(let j = 0 ; j < vArr2.length; j++) {
            if(vArr1[i] === vArr2[j]) {
                return [vArr1[i], vArr2[j]];  
            } 
        }
    }
	return false; 
}
const arrTrueReturn1 = ["a", "b", "c", "d"]; 
const arrTrueReturn2 = [1,2,3,4,5];
checkHasCommonVals(arrTrueReturn1, arrTrueReturn2); 

// ====================================================================================================================================================================================

// Slightly more elegant variation:  
// turn one of the arrays into an object, and then check the second array to see if the object has properties matching. Lookup on an object is O(1), and we have 1 
function hasCommonValsElegant(arr1, arr2) {
    let obj = {}; 
    
    arr1.forEach(val => {
        if(!obj[val]) {
            obj[val] = true; 
        }
    }); 

    for(let i=0; i < arr2.length ; i++) {
        if(obj[arr2[i]]) {
            return true; 
        }
    }
    return false; 

}
const arrTrueReturn1 = ["a", "b", "c", "g"]; 
const arrTrueReturn2 = ["e", "f", "g", "x"];
hasCommonValsElegant(arrTrueReturn1, arrTrueReturn2); 
// Process:  
//Step 1:  Turn the first array into an object where each value in the array is a key of the new object with true as a value. 
//Step 2:  Set up a loop for the second array.  
//Step three:  With that loop, go through the values of the second array and check if the object has a property of each value.   
    //If it does, return true.
    //Otherwise, return false.  
