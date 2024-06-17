function PrintNSum(n,m){
    
    let numCounter = 0;
    let numStorage = ' ';
    for (let i = n; i <= m; i++){
        numStorage += i + ' ';
        numCounter += i;
    }
    console.log(numStorage);
    console.log(`Sum: ${numCounter}`);
}