function firstLastKNumbers (arr){
    const k = arr[0];
    const copy = arr.slice(1);

    const firstResult = copy.slice(0, k);
    const secondResult = copy.slice(-k);
    console.log(firstResult. join(' '));
    console.log(secondResult.join(' '));
}
firstLastKNumbers([2, 
    7, 8, 9]);
//firstLastKNumbers([3,
    //6, 7, 8, 9]);
   
    