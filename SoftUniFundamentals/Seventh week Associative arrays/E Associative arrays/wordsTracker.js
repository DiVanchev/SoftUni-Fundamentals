function wordsTracking(arr) {
  const targetWords = arr.shift().split(" ");
  const trackedWords = {};

  for (const word of targetWords) {
    trackedWords[word] = 0;
  }

  for (const otherWords of arr) {
    if (otherWords in trackedWords) {
      trackedWords[otherWords]++;
    }
  }

  const entries = Object.entries(trackedWords);

  entries.sort((a, b) => b[1] - a[1]);

  for (const [word, count] of entries) {
    console.log(`${word} - ${count}`);
  }
}
wordsTracking([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurrences",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);
wordsTracking([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
