function amazingNumbers(number){
    const stringifiedNum = `${number}`;
    let sum = 0;
    for (let i = 0; i < stringifiedNum.length; i++) {
        sum += Number(stringifiedNum[i]) ;
    }
    
    let isAmazing = 'False';

    const stringifiedSum = `${sum}`;

    for (let j = 0; j < stringifiedSum.length; j++) {
        if (stringifiedSum[j] === '9'){
            isAmazing = 'True'
            break;
        }
    }

    console.log(`${number} Amazing? ${isAmazing}`);
}