function storePrevision (arr1, arr2){
    let inventory = {};
    
    for (let i = 0; i < arr1.length; i += 2){
        let name = arr1[i];
        let quantity = Number(arr1[i+1]);
        inventory[name] = (inventory[name] || 0) + quantity;
       
    }
    for (let i = 0; i < arr2.length; i += 2){
        let name = arr2[i];
        let quantity = Number(arr2[i+1]);
        inventory[name] = (inventory[name] || 0) + quantity;

    }

    for (let product in inventory) {
        console.log(`${product} -> ${inventory[product]}`);
    }
}
storePrevision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    );