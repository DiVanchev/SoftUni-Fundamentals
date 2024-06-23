function numeros(arr) {
  let newArr = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i].split(" ");
    let action = command[0];

    if (action === "Add") {
      const num = Number(command[1]);
      newArr.push(num);
    } else if (action === "Remove") {
      const num = Number(command[1]);
      const index = newArr.indexOf(num);
      if (index !== -1) {
        newArr.splice(index, 1);
      }
    } else if (action === "Replace") {
      const num = Number(command[1]);
      const replacement = Number(command[2]);
      const index = newArr.indexOf(num);
      if (index !== -1) {
        newArr[index] = replacement;
      }
    } else if (action === "Collapse") {
      const numLess = Number(command[1]);
      newArr = newArr.filter((numbers) => numbers >= numLess);
    } else if (action === "Finish") {
      console.log(newArr.join(" "));
    }
  }
}
numeros(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numeros(["1 20 -1 10", "Collapse 8", "Finish"]);
numeros(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);
