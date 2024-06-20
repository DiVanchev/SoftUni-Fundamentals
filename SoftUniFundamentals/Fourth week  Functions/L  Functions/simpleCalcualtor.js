function simpleCalculator(n1, n2, operator){
    switch (operator) {
        case 'multiply':
            console.log(n1 * n2);
            break;
        case 'divide':
            console.log(n1 / n2);
            break;
        case 'add':
            console.log(n1 + n2);
            break;
        case 'subtract':
            console.log(n1 - n2);
            break;
        default:
            break;
    }
}
simpleCalculator(5,
    5,
    'multiply'
    );
simpleCalculator(40,
    8,
    'divide'
    );
simpleCalculator(12,
    19,
    'add'
    );
simpleCalculator(50,
    13,
    'subtract'
    );