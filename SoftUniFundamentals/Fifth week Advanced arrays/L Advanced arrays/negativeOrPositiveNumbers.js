function negativeOrPositiveNumbers (arr){
    let result = [];

    for (let i = 0; i < arr.length; i++){
        const element = Number(arr[i]);
        if (element >= 0){
            result.push(element);
        } else {
            result.unshift(element);
        }
    }
    console.log(result.join('\n'));
}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);