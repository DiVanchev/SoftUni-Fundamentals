function lastKNumbersSequence (n, k){
    const arr = [1];
    
    for (let i = 1; i < n; i++){
        let lastK = arr.slice(-k);
        let sum = 0;
        
        for (let num of lastK){
            sum += num;
        }
        arr.push(sum)
    }
    console.log(arr.join(' '));
}
lastKNumbersSequence(6, 3);
//lastKNumbersSequence(8, 2);
