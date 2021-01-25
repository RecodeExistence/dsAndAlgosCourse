// Challenge:  given an array of values, find the first recurring value in that array.  
// This version is O(n) at best.  It's a fairly efficient, but still naieve approach. 
const arrNums = [2,5,1,2,3,5,1,2,4];
const arrNums2 = [2,1,1,2,3,5,1,2,4]; 
const arrNums3 = [2,3,4,5]; 
const arrHasString = [2,1,1,"string",3,5,1,2,4]; 

const firstRecurring = vArrayOfNumbers => {
vArrayOfNumbers = sanitizeData(vArrayOfNumbers); 

if(vArrayOfNumbers === false) return "You didn't provide an array"; 
let objValueStore = {}; 
let i; 

for(let i = 0 ; i < vArrayOfNumbers.length ; i++) {
// If the value isn't a number, remove it from the array.
    switch(objValueStore.hasOwnProperty(vArrayOfNumbers[i])) {
        case true: 
            return "First Recurring Number: " + vArrayOfNumbers[i]; 
        break; 

        case false: 
            objValueStore[vArrayOfNumbers[i]] = 1;
        break; 

        default: 
            return undefined; 
        break;
    
        }
    };
}; 

// Data sanitisation helper function.  
function sanitizeData(vArray) {
    let bIsObject; 

    if(typeof(vArray) !== "object") {
        bIsObject = false; 
        return bIsObject;
    }

    vArray.forEach(indexValue => {
        if(typeof(indexValue) !== "number") {
        vArray.slice(vArray.indexOf(indexValue), vArray.indexOf(indexValue), 1); 
        }; 
    });

    return vArray;
}; 

// Assigned for testing.  
let firstRecurringTest = firstRecurring(arrNums); 
let firstRecurringTest2 = firstRecurring(arrNums2); 
let firstRecurringNoRecurring = firstRecurring(arrNums3);
let firstRecurringIncorrectValue = firstRecurring(arrHasString);
let firstRecurringNotAnArray = firstRecurring("test");

// Display testing results:    
console.log("Test 1: Passing in a normal array of numbers: (Expects correct first recurring value)" + firstRecurringTest); 
console.log("Test 2: Passing in a different array of numbers to confirm works on another array (Expects correct first recurring value): " + firstRecurringTest2) 
console.log("Test 3: Passing in with no recurring numbers (expects undefined.): " + firstRecurringNoRecurring)
console.log("Test 4: Passing in an array with an unexpected value type: (expects first recurring if exists): " + firstRecurringIncorrectValue); 
console.log("Test 5: Passing in a non array: " + firstRecurringNotAnArray); 
 