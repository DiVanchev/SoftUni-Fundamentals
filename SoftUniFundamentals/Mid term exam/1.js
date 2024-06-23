function cookingClass(input) {
    const budget = Number(input[0]);
    const students = Number(input[1]);
    const priceOneFlour = Number(input[2]);
    const singleEgg = Number(input[3]);
    const singleApron = Number(input[4]);
  
    const total = (Math.ceil(students * 1.2) * singleApron) + 
                  ((students - Math.floor(students / 5)) * priceOneFlour) + 
                  (students * 10 * singleEgg);
                  
    const diff = total - budget;
    
    if (total <= budget) {
      console.log(`Items purchased for ${total.toFixed(2)}$.`);
    } else {
      console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
cookingClass([50, 2, 1.0, 0.1, 10.0]);
  