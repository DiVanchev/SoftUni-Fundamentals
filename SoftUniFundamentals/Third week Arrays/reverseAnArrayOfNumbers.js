function reverseAnArrayOfNumbers(n, inputArr){
    let reverseArray = [];
    for (let i = n - 1; i >= 0; i--){
        reverseArray.push(inputArr[i]);
    }
    console.log(reverseArray.join(' '));
}
reverseAnArrayOfNumbers(3, [10, 20, 30, 40, 50]);