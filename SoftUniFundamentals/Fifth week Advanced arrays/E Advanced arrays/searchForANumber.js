function searchForANumber(mainArr, cringeArr) {
  const [take, deleteIt, searchFor] = cringeArr;

  let newArr = mainArr.slice(0, take);
  newArr.splice(0, deleteIt);
  let numCounter = 0;

  for (const numbers of newArr) {
    if (numbers === searchFor) {
      numCounter++;
    }
  }
  console.log(`Number ${searchFor} occurs ${numCounter} times.`);
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);
searchForANumber([7, 5, 5, 8, 2, 7], [3, 1, 5]);
