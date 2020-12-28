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
