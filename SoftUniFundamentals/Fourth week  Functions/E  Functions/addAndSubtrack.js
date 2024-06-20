function addAndSubtract (num1, num2, num3){

    function sum (x, y){
        return x + y;
    }

    function subtract (x, y){
        return x - y;
    }
    const sumFirstNums = sum(num1, num2);
    const result = subtract(sumFirstNums, num3)

    console.log(result);
} 
addAndSubtract(23, 6, 10);
    
