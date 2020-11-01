// Multiple pointers - more elegant solution.  
// Multiple pointers are very efficient for solving problems with minimal space complexity.
// See multiple pointers explanation file for an in depth understanding.  
TODO: // Update this file with more information on when to use this algorithm effectively. 

function sumZero(arr) {
    // define the pointers:
    let left = 0; let right = arr.length-1; 
    let valuesThatSum = []; 
    
    // set up the while loop, which runs until left and right pointer meet:
    while(left < right) {
        let sum = arr[left] + arr[right];  // on each iteratation, check current pointer value totals.
    
        // check if the current indexes sum up to 0, return if it is.
        if(sum===0) {
            return [arr[left], arr[right]];   
        // If they add to more than 0, our right pointer value is too high, move it down an index:
        } else if(sum > 0) {
            right--;  
        // If they add up to a negative number, our right pointer value is too high, move the pointer up an index:
        } else {
                left++; 
            }
        }
    }
    
    sumZero([-4,-3,-2,-1,0,1,2,3,10]); 