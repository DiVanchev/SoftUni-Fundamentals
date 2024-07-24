function solve (name, lastName, hairColor){
    const person = {name, lastName, hairColor};
    const stringifiedPerson = JSON.stringify(person);

    console.log(stringifiedPerson);
}
solve('George', 'Jones', 'Brown');