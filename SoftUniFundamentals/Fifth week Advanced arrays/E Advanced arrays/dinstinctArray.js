function distinctArray (arr){
    let uniqueNums = [];
    
    for (let i = 0; i < arr.length; i++){
        let num = Number(arr[i]);
        
        if (!uniqueNums.includes(num)) {
            uniqueNums.push(num);
        }
    }
    console.log(uniqueNums.join(' '));
}
distinctArray([1, 2, 3, 4]);
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);
distinctArray([20, 8, 12, 13, 4, 4, 8, 5]);