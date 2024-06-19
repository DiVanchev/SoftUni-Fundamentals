function mergeArrays (arr1, arr2){
    let thirdArray = [];

    for (let i = 0; i < arr1.length; i++){
        if (i % 2 === 0) {
            let sum = Number(arr1[i]) + Number(arr2[i]);
            thirdArray.push(sum);
        } else {
            let concat = arr1[i] + arr2[i];
            thirdArray.push(concat);
        }

    }
    console.log(thirdArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);