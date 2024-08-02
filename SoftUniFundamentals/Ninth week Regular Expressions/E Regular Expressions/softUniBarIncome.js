function barIncome(arr) {
  let regex =
    /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|\d$%.]*(?<price>\d+\.?\d+)\$/;

  let total = 0;
  let line = arr.shift();

  while (line !== "end of shift") {
    let isValid = line.match(regex);

    if (!isValid) {
      line = arr.shift();
      continue;
    }

    let customerName = isValid.groups.customer;
    let productName = isValid.groups.product;
    let count = isValid.groups.count;
    let price = isValid.groups.price;

    let currentTotal =
      Number(count) * Number(price);
    total += currentTotal;

    console.log(
      `${customerName}: ${productName} - ${currentTotal.toFixed(2)}`
    );
    line = arr.shift();
  }
  console.log(`Total income: ${total.toFixed(2)}`);
}
barIncome([
  "%George%<Croissant>|2|10.3$",
  "%Peter%<Gum>|1|1.3$",
  "%Maria%<Cola>|1|2.4$",
  "end of shift",
]);
