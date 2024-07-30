function oddOccurrences(str) {
    const wordOccurrences = new Map();
    const words = str.split(' ').map(word => word.toLowerCase());

    for (const word of words) {
        
        if (wordOccurrences.has(word)){
            const currentOccurrence = wordOccurrences.get(word);
            wordOccurrences.set(word, currentOccurrence + 1);
        } else {
            wordOccurrences.set(word, 1);
        }
    }

    const wordEntries = wordOccurrences.entries();
    const validWords = [];
    
    for (const [word, num] of wordEntries) {
        if (num % 2 !== 0){
            validWords.push(word);
        }
    }
    
    console.log(validWords.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');
