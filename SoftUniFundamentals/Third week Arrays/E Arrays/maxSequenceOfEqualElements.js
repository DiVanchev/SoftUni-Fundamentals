function maxSequenceOfEqualElements (arr){
   let longestSequence = [];
   let curSequence = [arr[0]];  
    
   for (let i = 1; i < arr.length; i++) {
    let curNum = arr[i];

    if (curNum === curSequence[0]) {
        curSequence.push(curNum);
    } else {
        if (curSequence.length > longestSequence.length) {
            longestSequence = curSequence.slice();
        }
        curSequence = [curNum]; 
    }
}

    console.log(longestSequence.join(' '));
}
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]);