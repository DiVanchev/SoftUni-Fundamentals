function sortArrayBy2Criteria (arr) {
    
    const sortedArr = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join(`\n`));
}
sortArrayBy2Criteria(['alpha', 'beta', 'gamma']);
console.log('---------------')
sortArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);