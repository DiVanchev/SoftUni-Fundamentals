function spiceMustFlow (startNum){
    let total = 0;
    let totalDays = 0;
    
    for (let i = startNum; i >= 100; i -= 10){
        totalDays++;
        total += i;
        total -= 26; 
    }
    if (total >= 26) {
        total -= 26;
    }
    console.log(`${totalDays}`);
    console.log(`${total}`);

}