function evenOrOddSubtraction(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);
  }
  let even = 0;
  let odd = 0;

  for (let num of arr) {
    if (num % 2 === 0) {
      even += num;
    } else {
      odd += num;
    }
  }
  let sum = even - odd;
  console.log(`${sum}`);
}
evenOrOddSubtraction([1, 2, 3, 4, 5, 6]);
