function palindromeRearranging(inputString) {
    const charArray  = inputString.split("");
    
    let letterObj = {};
    
    for(let i = 0; i < inputString.length; i++){
        if(!letterObj.hasOwnProperty(charArray[i])){
            letterObj[charArray[i]] = 1;
        }else{
            letterObj[charArray[i]]++;
        }
    }
    
    
    let oddCount =0;
    
    for(val in letterObj){
        if(letterObj[val] % 2 != 0){
            oddCount++
        }
    }
    
    return oddCount > 1 ? false : true;
}
