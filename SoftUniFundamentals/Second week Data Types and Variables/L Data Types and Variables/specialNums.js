function printSpecialNumbers(n) {
    for (let i = 1; i <= n; i++) {
      let sum = 0;
      let temp = i;
  
      while (temp > 0) {
        sum += temp % 10;
        temp = parseInt(temp / 10, 10);
      }
  
      let isSpecial = sum === 5 || sum === 7 || sum === 11;
      if(isSpecial){
          console.log(`${i} -> True`);
      }
      else{
          console.log(`${i} -> False`);
      }
    }
  }