function pascalCaseSplitter(str) {
    const pattern = /[A-Z][a-z]*/g;
    const allMatches = str.matchAll(pattern);
    
    let matchedArr = [];
    
    
    for (const matched of allMatches) {
        matchedArr.push(matched);
    }
    matchedArr = matchedArr.join(', ');
    console.log(matchedArr);
}
pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
//pascalCaseSplitter('HoldTheDoor');
//pascalCaseSplitter('ThisIsSoAnnoyingToDo');