function wordOccurrence(arr) {
  let sortedWords = {};

  for (const word of arr) {
    if (sortedWords.hasOwnProperty(word)) {
      sortedWords[word] += 1;
    } else {
      sortedWords[word] = 1;
    }
  }

  let evenMoreSorted = Object.entries(sortedWords).sort(([wordA, countA], [wordB, countB]) => countB - countA);

  for (const [word, count] of evenMoreSorted) {
    console.log(`${word} -> ${count} times`);
  }
  console.log(sortedWords);
}
wordOccurrence([
  "Here",
  "is",
  "the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "sentence",
  "And",
  "finally",
  "the",
  "third",
  "sentence",
]);

//wordOccurrence(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);
