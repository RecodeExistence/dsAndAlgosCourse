function validAnagram(word1, word2) {
    word1.length !== word2.length || typeof(word1) !== "string" || typeof(word2) !== "string" ? false : true; 

    let wordObj1 = {}; let wordObj2 = {}; 

    word1.split('').forEach(letter => {
        wordObj1[letter] = (wordObj1[letter] || 0) + 1; 
    }); 
    
    word2.split('').forEach(letter => {
        wordObj2[letter] = (wordObj2[letter] || 0) + 1; 
    }); 
    
    for(let key in wordObj1) {
        if(!(key in wordObj2)){
            return false; 
        }
        if(wordObj2[key] !== wordObj1[key]) {
            return false; 
        }
    }
    return true; 
}

validAnagram("hello", "olleh"); 