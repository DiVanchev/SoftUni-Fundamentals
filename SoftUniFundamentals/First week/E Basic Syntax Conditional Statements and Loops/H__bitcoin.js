function bitcoin(arr){
    let bitcoinCount = 0;
    let bitcoinDay = 0;
    let totalMoney = 0;
    let curDay = 1;

    for (let i = 0; i < arr.length; i++){
        let gold = arr[i];
        
        if (curDay % 3 === 0){
            gold *= 0.7;
        }

        let moneyFromGold = gold * 67.51;

        totalMoney += moneyFromGold;

        while (totalMoney >= 11949.16 ){
            if (bitcoinCount === 0){
                bitcoinDay = curDay;
            }
            bitcoinCount++;
            totalMoney -= 11949.16;
        }
        curDay++;
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`);
    
    if (bitcoinDay !== 0){
        console.log(`Day of the first purchased bitcoin: ${bitcoinDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}
bitcoin([50, 100]);