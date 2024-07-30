//function solve(arr) {
//  const partyIdx = arr.indexOf("PARTY");
//  let guestList = arr.slice(0, partyIdx);
//
//  for (let i = partyIdx + 1; i < arr.length; i++) {
//      const guest = arr[i];
//      const guestIdx = guestList.indexOf(guest);
//      guestList.splice(guestIdx, 1);
//  }
//
//  const result = guestList.filter(g => Number.isInteger(+g[0])).concat(guestList.filter(g => !Number.isInteger(+g[0])));
//  console.log(result.length);
//  console.log(result.join("\n"));
//}

function partyTime(arr) {
  const guests = {
    VIP: new Set(),
    regulars: new Set(),
  };

  let guestCounter = 0;
  let partyStarted = false;

  for (const command of arr) {
    if (command === "PARTY") {
      partyStarted = true;
      continue;
    }
    if (partyStarted) {
      if (/^\d/.test(command)) {
        guests.VIP.delete(command);
        guestCounter--;
      } else {
        guests.regulars.delete(command);
        guestCounter--;
      }
    } else {
      if (/^\d/.test(command)) {
        if (!guests.VIP.has(command)) {
          guests.VIP.add(command);
          guestCounter++;
        }
      } else {
        if (!guests.regulars.has(command)) {
          guests.regulars.add(command);
          guestCounter++;
        }
      }
    }
  }
  const arrVIP = Array.from(guests.VIP);
  const arrRegulars = Array.from(guests.regulars);

  console.log(guestCounter);
  if (arrVIP.length > 0) {
    console.log(arrVIP.join("\n"));
  }
  if (arrRegulars.length > 0) {
    console.log(arrRegulars.join("\n"));
  }
}
partyTime([
  "7IK9Yo0h",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
  "tSzE5t0p",
  "PARTY",
  "9NoBUajQ",
  "Ce8vwPmE",
  "SVQXQCbc",
]);

//partyTime([
//  "m8rfQBvl",
//  "fc1oZCE0",
//  "UgffRkOn",
//  "7ugX7bm0",
//  "9CQBGUeJ",
//  "2FQZT3uC",
//  "dziNz78I",
//  "mdSGyQCJ",
//  "LjcVpmDL",
//  "fPXNHpm1",
//  "HTTbwRmM",
//  "B5yTkMQi",
//  "8N0FThqG",
//  "xys2FYzn",
//  "MDzcM9ZK",
//  "PARTY",
//  "2FQZT3uC",
//  "dziNz78I",
//  "mdSGyQCJ",
//  "LjcVpmDL",
//  "fPXNHpm1",
//  "HTTbwRmM",
//  "B5yTkMQi",
//  "8N0FThqG",
//  "m8rfQBvl",
//  "fc1oZCE0",
//  "UgffRkOn",
//  "7ugX7bm0",
//  "9CQBGUeJ",
//]);
