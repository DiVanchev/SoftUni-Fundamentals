function sorting (arr) {
    let sortedArr = arr.sort((a, b) => b - a);
    let resultArr = [];

    while (sortedArr.length > 0){
        const firstElement = sortedArr.shift();
        resultArr.push(firstElement);

        const lastElement = sortedArr.pop();
        resultArr.push(lastElement);
    }
    console.log(resultArr.join(' '));
}
sorting([1, 21, 3]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);
