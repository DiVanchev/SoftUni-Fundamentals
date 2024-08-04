function solve(arr) {
  let myString = arr.shift();
  let command = arr.shift();

  while (command !== "End") {
    let tokens = command.split(" ");
    let action = tokens.shift();

    if (action === "Translate") {
      let toReplace = tokens.shift();
      let replaceWith = tokens.shift();
      while (myString.includes(toReplace)) {
        myString = myString.replace(toReplace, replaceWith);
      }
      console.log(myString);
    } else if (action === "Includes") {
      let stringToCheck = tokens.shift();
       if (myString.includes(stringToCheck)) {
        console.log("True");
       } else {
        console.log("False");
       }
    } else if (action === "Start") {
      let startsWith = tokens.shift();
        if (myString.startsWith(startsWith)) {
            console.log("True");
        } else { 
            console.log("False"); 
        }
    } else if (action === "Lowercase") {
      myString = myString.toLowerCase();
      console.log(myString);
    } else if (action === "FindIndex") {
      let find = tokens.shift();
      let found = myString.lastIndexOf(find);
      console.log(found);
    } else if (action === "Remove") {
      let startIndex = Number(tokens.shift());
      let count = Number(tokens.shift());

      if (count > 0 && startIndex >= 0 && startIndex < myString.length) {
        myString = myString.slice(0, startIndex) + myString.slice(startIndex + count);
      }
      console.log(myString);
    }

    command = arr.shift();
  }
}
//solve([
//  "//Thi5 I5 MY 5trING!//",
//  "Translate 5 s",
//  "Includes string",
//  "Start //This",
//  "Lowercase",
//  "FindIndex i",
//  "Remove 0 10",
//  "End",
//]);
solve([
  "*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End",
]);
