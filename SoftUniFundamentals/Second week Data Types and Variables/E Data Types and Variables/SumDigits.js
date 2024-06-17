function sumOfDigits (num){
    let numStr = String(num);
    let sum = 0;

    for (let i = 0; i < numStr.length; i++){
        let curNum = Number(numStr[i]);
        sum += curNum;
    }
    console.log(sum);
}