function factorialDivision (f1, f2){
    let factorialCalcOne = 1;
    let factorialCalcTwo = 1;
    
    for (let i = f1; i > 0; i--){
        factorialCalcOne *= i;
    }

    for (let i = f2; i > 0; i--){
        factorialCalcTwo *= i;
    }

    let afterDivision = factorialCalcOne / factorialCalcTwo;

    console.log(afterDivision.toFixed(2));
}
factorialDivision(5, 2);
factorialDivision(6, 2);