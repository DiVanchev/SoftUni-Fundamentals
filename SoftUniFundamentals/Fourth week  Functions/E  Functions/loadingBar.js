function loadingBar(n) {
  let arr = [];
  const percentSymbols = Math.floor(n / 10);

  for (let i = 0; i < percentSymbols; i++) {
    arr.push('%');
  }

  for (let i = percentSymbols; i < 10; i++) {
    arr.push('.');
  }
  if (n === 100) {
    console.log(`${n}% Complete!`);
    console.log(`[${arr.join('')}]`);
  } else {
    console.log(`${n}% [${arr.join('')}]`);
    console.log("Still loading...");
  }
}
loadingBar(30);
loadingBar(50);
loadingBar(100);
