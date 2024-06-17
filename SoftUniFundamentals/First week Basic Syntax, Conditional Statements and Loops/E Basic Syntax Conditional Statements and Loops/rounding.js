function rounding(number, precision){
   
    if (precision > 15) {
        precision = 15;
    } else if (precision < 0) {
        precision = 0;
    }

    let roundedNum = number.toFixed(precision);

    let result = parseFloat(roundedNum);

    console.log(result);
}