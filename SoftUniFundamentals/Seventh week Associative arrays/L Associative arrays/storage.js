function storage(arr) {
    let map = new Map();

    for (const string of arr) {
        let tokens = string.split(' ');
        let product = tokens[0];
        let amount = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, amount)
        } else {
            let curAmount = map.get(product);
            let newAmount = curAmount += amount;
            map.set(product, newAmount);
        }
    }

    for (const keys of map) {
        console.log(`${keys[0]} -> ${keys[1]}`);
    }
}
storage(["tomatoes 10", "coffee 5", "olives 100", "coffee 40"]);
//storage(["apple 50", "apple 61", "coffee 115", "coffee 40"]);
