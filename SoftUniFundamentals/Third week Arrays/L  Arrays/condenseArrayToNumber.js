function condenseArrayToNumber(arr) {
    while (arr.length > 1) {
        let condensedArr = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condensedArr.push(arr[i] + arr[i + 1]);
        }
        arr = condensedArr;
    }
    console.log(arr[0]);
}
condenseArrayToNumber([2, 10, 3]); 
condenseArrayToNumber([5, 0, 4, 1, 2]);
condenseArrayToNumber([1]);
