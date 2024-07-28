function phoneBook(arr) {
  let dictionary = {};

  for (const entry of arr) {
    let [name, number] = entry.split(" ");
    if (dictionary.hasOwnProperty(dictionary[name])) {
      break;
    } else {
    dictionary[name] = number;
    }
  }

  for (const [name, number] of Object.entries(dictionary)) {
    console.log(`${name} -> ${number}`);
  }
}
//phoneBook([
//"Tim 0834212554",
//"Peter 0877547887",
//"Bill 0896543112",
//"Tim 0876566344",
//]);
phoneBook(["George 0552554", "Peter 087587", "George 0453112", "Bill 0845344"]);
