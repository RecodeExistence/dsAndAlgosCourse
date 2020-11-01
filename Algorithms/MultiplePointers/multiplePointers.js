function sumsToTen(arrNumList) {
    for(let i = 0 ; i < arrNumList.length; i++) {
        let currentNum = arrNumList[i]; 
        for(let j = i+1 ; j < arrNumList.length ; j++) {
            if (currentNum + arrNumList[j] === 10) {
                return 'Match found'; 
            }
        }
    }
}

sumsToTen([1,2,3,4,5,6,7,8,9]); 



