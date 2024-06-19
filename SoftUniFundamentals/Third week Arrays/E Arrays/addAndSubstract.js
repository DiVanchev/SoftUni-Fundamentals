function addAndSubtract(arr) {
    let newArr = [];
    let originalSum = 0;
    let newSum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      originalSum += num;
      if (num % 2 === 0) {
        newArr.push(num + i);
      } else {
        newArr.push(num - i);
      }
      newSum += newArr[i];
    }
    console.log(newArr);
    console.log(originalSum);
    console.log(newSum);
  }
  addAndSubtract([5, 15, 23, 56, 35]);
  addAndSubtract([-5, 11, 3, 0, 2]);