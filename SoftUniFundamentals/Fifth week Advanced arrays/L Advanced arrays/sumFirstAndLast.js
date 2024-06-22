function sumFirstAndLast (arr){
    if (arr.length === 1){
        console.log(Number(arr[0]) + Number(arr[0]));
        return;
    }
    
    const fElem = Number(arr.shift());
    const lElem = Number(arr.pop());

    console.log(fElem + lElem);
}
sumFirstAndLast(['20', '30', '40']);
sumFirstAndLast(['5', '10']);
sumFirstAndLast([5]);
