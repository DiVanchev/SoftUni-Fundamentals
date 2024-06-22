function arrayManipulation(arr) {
  let newArr = arr.shift().split(" ").map(Number);

  for (let i = 0; i < arr.length; i++) {
    let command = arr[i];

    if (command.startsWith("Add")) {
      const allCommands = command.split(" ");
      const num = Number(allCommands[1]);
      newArr.push(num);
    } else if (command.startsWith("RemoveAt")) {
      const allCommands = command.split(" ");
      const index = Number(allCommands[1]);
      newArr.splice(index, 1);
    } else if (command.startsWith("Remove")) {
      const allCommands = command.split(" ");
      const num = Number(allCommands[1]);
      newArr = newArr.filter((n) => n !== num);
    } else if (command.startsWith("Insert")) {
      const allCommands = command.split(" ");
      const num = Number(allCommands[1]);
      const index = Number(allCommands[2]);
      newArr.splice(index, 0, num);
    }
  }
  console.log(newArr.join(" "));
}
arrayManipulation([
  "4 19 2 53 6 43",
  "Add 3",
  "Remove 2",
  "RemoveAt 1",
  "Insert 8 3",
]);

arrayManipulation([
  "6 12 2 65 6 42",
  "Add 8",
  "Remove 12",
  "RemoveAt 3",
  "Insert 6 2",
]);
