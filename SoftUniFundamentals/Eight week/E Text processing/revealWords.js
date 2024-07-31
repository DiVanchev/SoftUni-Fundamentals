function revealWords(words, sentence) {
  const sepWords = words.split(", ");
  const textWords = sentence.split(" ");

  const templates = textWords.filter((word) => word.includes("*"));

  for (const template of templates) {
    const rightWord = sepWords.find((word) => word.length === template.length);
    sentence = sentence.replace(template, rightWord);
  }
  console.log(sentence);
}
//revealWords(
//  "great",
//  "softuni is ***** place for learning new programming languages"
//);
revealWords(
  "great, learning",
  "softuni is ***** place for ******** new programming languages"
);
