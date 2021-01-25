mergeSortedArrays([0,3,4,31], [4,6,30]); 
//[0, 3, 4, 4, 6, 30, 31]


// 2 variables to track, i and j.  i will be the left array, j will be the right array.  
// will need to loop.  
// if j is bigger than i, move up.  
// if not, insert j at that index+1.  
// walk through using numbers above: 

/*
    loop 1:  i = 0, j = 0. 
            values: i[0] = 0 , j[0] = 4
            is i[0] < j[0] ? yes, move i up 1.  
            values: i[1] = 3 , j[0] = 4
            is i[1] < j[0] ? yes, move i up 1.  
            values: i[2] = 4 , j[0] = 4
            is i[2] < j[0] ? NO - Assign j[0] to i[2]
*/




let array1 = [0,3,4,31];
let array2 = [4,6,30];
function mergeSortedArrays(arr1, arr2){
    let array1Item = arr1[0]; 
    let array2Item = arr2[0]; 
    let i = 1; 
    let j = 1; 
    const mergedArray = []; 


    if(arr2 === [] || arr2.length === 0) {
        return arr1;
    } 
    
    if(arr1 === [] || arr1.length === 0) {
        return arr2; 
    }
     
    while(array1Item || array2Item) {
        console.log(array1Item, array2Item)
            if(!array2Item || array1Item < array2Item) {
            mergedArray.push(array1Item);
            array1Item = arr1[i];
            i++;  
        } else  {
            mergedArray.push(array2Item); 
            array2Item = arr2[j]; 
            j++; 
        };
    };
    return mergedArray; 
};

mergeSortedArrays(array1, array2);

function createRandomNums() {
    let arrNums = []; 
    for(let i = 0; i < 3; i++) {
        arrNums.push(Math.floor(Math.random() * 100)); 
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

