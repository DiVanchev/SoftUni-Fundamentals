function hashTag(str) {
    const words = str.split(' ');
    const filteredStr = words.filter(word => word.startsWith('#') && word.length > 1);
    
    const pattern = /\b[A-z]+\b/;

    for (let hashWord of filteredStr) {
        hashWord = hashWord.substring(1);

        if (pattern.test(hashWord)) {
            console.log(hashWord);
        }
    }
}
hashTag("Nowadays everyone uses # to tag a #special word in #socialMedia");
//hashTag(
//  "The symbol # is known #variously in English-speaking #regions as the #number sign"
//);