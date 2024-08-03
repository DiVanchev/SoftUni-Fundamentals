function theImitationGame(arr) {
  let message = arr.shift();
  let command = arr.shift();

  while (command !== "Decode") {
    let tokens = command.split("|");
    let action = tokens[0];

    if (action === "Move") {
      let letterCount = +tokens[1];
      let lettersToMove = message.substring(0, letterCount);
      message = message.replace(lettersToMove, "");
      message += lettersToMove;
    } else if (action === "Insert") {
      let index = +tokens[1];
      let value = tokens[2];

      message = message.substring(0, index) + value + message.substring(index);
    } else if (action === "ChangeAll") {
      let substring = tokens[1];
      let replacement = tokens[2];

      while (message.includes(substring)) {
        message = message.replace(substring, replacement);
      }
    }
    command = arr.shift();
  }
  console.log(`The decrypted message is: ${message}`);
}
//theImitationGame(["zzHe",
//    "ChangeAll|z|l",
//    "Insert|2|o",
//    "Move|3",
//    "Decode"]);

theImitationGame([
  "owyouh",
  "Move|2",
  "Move|3",
  "Insert|3|are",
  "Insert|9|?",
  "Decode",
]);
