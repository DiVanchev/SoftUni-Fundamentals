function smallestTwoNumber (arr){
    const newSortedArr = arr.sort ((a,b) => a -b).slice(0, 2).join(' ')
    console.log(newSortedArr);
}
smallestTwoNumber([30, 15, 50, 5]);
smallestTwoNumber([3, 0, 10, 4, 7, 3]);