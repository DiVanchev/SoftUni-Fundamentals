function processOddNumbers(arr) {
    // Filter elements at odd indices, multiply them by 2, and reverse the array
    let newArr = arr
        .map((num, i) => (i % 2 !== 0 ? num * 2 : null))
        .filter(num => num !== null)
        .reverse();
    
    console.log(newArr.join(' '));
}
processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3])
