function createRandomNums() {
    let arrNums = []; 
    for(let i = 0; i < 3; i++) {
        arrNums.push(Math.floor(Math.random() * 100)); 
    }
    return arrNums;
}




let arr1 = createRandomNums(); 
let arr2 = createRandomNums(); 
console.log(mergeSortedNumbers(arr1, arr2));


               
// 1, 20, 40, 79

// 2, 7, 15, 100
// 4 is greater than 1, j++, 4 is greater than 2, j++, 4 is greater than 3 j++, 
// 4 is less than 5 so arr1[current index minus 1] is 4.  

