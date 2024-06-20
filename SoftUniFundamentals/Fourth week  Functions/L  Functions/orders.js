function orders (product, quantity, price){
    switch (product) {
        case 'coffee':
            price = 1.50;
            break;
        case 'water':
            price = 1.00;
            break;
        case 'coke':
            price = 1.40;
            break;
        case 'snacks':
            price = 2.00;
        default:
            console.log('Not included.');
            break;
    }
    let total = price * quantity;
    console.log(`${total.toFixed(2)}`);
}
orders("water", 5);
orders("coffee", 2);