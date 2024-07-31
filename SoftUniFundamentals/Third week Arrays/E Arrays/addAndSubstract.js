function addAndSubtract(arr, comparedNum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === comparedNum) {
        console.log(`${arr[i]} ${arr[j]}`);
      }
    }
  }
}

//addAndSubtract([1, 7, 6, 2, 19, 23], 8);
addAndSubtract([14, 20, 60, 13, 7, 19, 8], 27);
//addAndSubtract([1, 2, 3, 4, 5, 6], 6);
