function RightPlace(word, symbol, wholeWord) {
    let result = "";
    for (let i = 0; i < word.length; i++) {
      if (word[i] === "_") {
        result += symbol;
      } else {
        result += word[i];
      }
    }
    if (result === wholeWord) {
      console.log("Matched");
    } else {
      console.log("Not Matched");
    }
  }