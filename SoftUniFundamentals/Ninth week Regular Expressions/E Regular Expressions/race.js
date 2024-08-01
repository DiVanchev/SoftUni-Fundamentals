function race(arr) {
    
    let names = arr.shift().split(", ");
    let result = [];
    names.forEach(name => result[name] = 0);

    let command = arr.shift();
    let letterPattern = /[A-Za-z]/g;
    let digitPattern = /\d/g;

    while (command !== 'end of race') {
        let letterMatch = command.match(letterPattern);
        let name = letterMatch.join('');
        
        let digitMatch = command.match(digitPattern);
        let distance = digitMatch.map(Number).reduce((acc, val) => acc + val);

        if(name in result) {
            result[name] += distance
        }


        command = arr.shift();
    }

    let sortedRacers = Object.entries(result).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sortedRacers[0][0]}`);
    console.log(`2nd place: ${sortedRacers[1][0]}`);
    console.log(`3rd place: ${sortedRacers[2][0]}`);
    
}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']
    );