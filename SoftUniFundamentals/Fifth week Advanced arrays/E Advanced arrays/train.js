function train (arr){
    let wagons = arr.shift().split(' ').map(Number);
    const capacity = Number(arr.shift());

   for (let i = 0; i < arr.length; i++){
    let command = arr[i];

    if (command.includes('Add')) {
        const tokens = command.split(' ');
        const passengers = Number(tokens[1])
        wagons.push(passengers);
    } else {
        const newPassengers = Number(command);

        for (let j = 0; j < wagons.length; j++){
            if (wagons[j] + newPassengers <= capacity){
                wagons[j] +=newPassengers;
                break; 
            }
        }
    }
   }
   console.log(wagons.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
);