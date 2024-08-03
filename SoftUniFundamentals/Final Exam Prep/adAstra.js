function solve(arr) {
    let pattern = /([|#])(?<item>[A-Za-z\s]+)\1(?<exp_date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let str = arr.shift();
    
    let totalCalories = 0;
    let items = [];
    let match;
    
    while ((match = pattern.exec(str)) !== null) {
        let itemName = match.groups.item;
        let expDate = match.groups.exp_date;
        let calories = Number(match.groups.calories);
        
        totalCalories += calories;

        items.push(`Item: ${itemName}, Best before: ${expDate}, Nutrition: ${calories}`);
    }
    
    let days = Math.floor(totalCalories / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));
}
solve([
  "#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500|Not right|6.8.20|5|",
]);
