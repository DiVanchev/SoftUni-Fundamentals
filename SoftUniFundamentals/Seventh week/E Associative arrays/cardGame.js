function cardGame(arr) {
  let scores = {
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
    S: 4,
    H: 3,
    D: 2,
    C: 1,
  };

  let nameWithScore = {};

  for (let details of arr) {
    let [name, cards] = details.split(": ");
    let singleHand = cards.split(", ");

    if (!nameWithScore[name]) {
      nameWithScore[name] = {
        score: 0,
        cardOptions: [],
      };
    }
    for (let card of singleHand) {
      let number = card.slice(0, -1);
      let colour = card.slice(-1);

      if (Number(number) <= 10) {
        number = Number(number);
      } else {
        number = scores[number];
      }

      if (!nameWithScore[name].cardOptions.includes(card)) {
        nameWithScore[name].score += number * scores[colour];
        nameWithScore[name].cardOptions.push(card);
      }
    }
  }
  let entries = Object.entries(nameWithScore);

  for (let [name, info] of entries) {
    console.log(`${name}: ${info.score}`);
  }
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);
