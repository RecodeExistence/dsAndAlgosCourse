function createRandomNums() {
    let arrNums = []; 
    for(let i = 0; i < 10; i++) {
        arrNums.push(Math.floor(Math.random() * 100)); 
    }
    return arrNums;
}


function mergeSortedNumbers(vArrayOfNumbers1, vArrayOfNumbers2) {
    let iArray1Pointer = 0; 
    let iArray2Pointer = 0; 

    let arrMergedNumberArrays = []; 
    let bReachedEndOfArray = false; 

    do {
        if(iArray1Pointer === vArrayOfNumbers1.length || iArray2Pointer === vArrayOfNumbers2.length) {
            bReachedEndOfArray = true; 
        }
        if(vArrayOfNumbers1[iArray1Pointer] < vArrayOfNumbers2[iArray2Pointer]) {
            arrMergedNumberArrays.push(vArrayOfNumbers1[iArray1Pointer]); 
            iArray1Pointer++; 
        } else {
            arrMergedNumberArrays.push(vArrayOfNumbers2[iArray2Pointer]); 
            iArray2Pointer++; 
            } 
        }
    while(bReachedEndOfArray === false);
	return arrMergedNumberArrays; 
}


let arr1 = createRandomNums(); 
let arr2 = createRandomNums(); 
console.log(mergeSortedNumbers(arr1, arr2));