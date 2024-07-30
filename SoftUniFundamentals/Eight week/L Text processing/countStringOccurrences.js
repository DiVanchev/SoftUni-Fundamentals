function countStringOccurrences(str, wordForSearch) {
    
    let words = str.split(" ");
    let wordCounter = 0;

    for (const word of words) {
        if (word === wordForSearch) {
            wordCounter++;
        }
    }
    console.log(wordCounter);
}
countStringOccurrences('This is a word and it also is a sentence',
'is'
);
countStringOccurrences('softuni is great place for learning new programming languages',
'softuni'
);