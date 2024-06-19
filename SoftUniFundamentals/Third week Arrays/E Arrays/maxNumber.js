function maxNumber (arr){
    let topNums = [];

    for (let i = 0; i < arr.length; i++){
        let curNum = arr[i];
        let isTop = true;
        
        for (let j = i + 1; j < arr.length; j++){
            let numToRight = arr[j];

            if (curNum <= numToRight){
                isTop = false;
                break;
            }
        }
        if (isTop){
            topNums.push(curNum);
        }
    }
    console.log(topNums.join(' '));
}
maxNumber([1, 4, 3, 2]);
maxNumber([14, 24, 3, 19, 15, 17]);