function solve(arr) {
  let totalInputs = Number(arr.shift());
  let match;

  const validPattern =
    /^(?:\$([A-Z][a-z]{2,})\$|%([A-Z][a-z]{2,})%): \[(\d+)\]\|\[(\d+)\]\|\[(\d+)\]\|$/;

  for (let i = 0; i < totalInputs; i++) {
    let message = arr[i];
    match = validPattern.exec(message);

    if (match) {
      const tag = match[1] || match[2];

      const numbers = [match[3], match[4], match[5]];

      const decryptedMessage = numbers.map((num) => String.fromCharCode(Number(num))).join("");
      console.log(`${tag}: ${decryptedMessage}`);
    } else {
      console.log("Valid message not found!");
    }
  }
}
solve([
  "4",
  "$Request$: [73]|[115]|[105]|",
  "%Taggy$: [73]|[73]|[73]|",
  "%Taggy%: [118]|[97]|[108]|",
  "$Request$: [73]|[115]|[105]|[32]|[75]|",
]);
//solve([
//  "3",
//  "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
//  "$tAGged$: [97][97][97]|",
//  "$Request$: [73]|[115]|[105]|true",
//]);
