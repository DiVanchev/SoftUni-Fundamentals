function addressBook(arr) {
    let addressesOfPeople = {};

    for (const entry of arr) {
        const [name, address] = entry.split(':');
        addressesOfPeople[name] = address;
    }

    const sortedAddresses = Object.keys(addressesOfPeople).sort();

    for (const name of sortedAddresses) {
        console.log(`${name} -> ${addressesOfPeople[name]}`);
    }
}
//addressBook(['Tim:Doe Crossing',
//    'Bill:Nelson Place',
//    'Peter:Carlyle Ave',
//    'Bill:Ornery Rd']
//   );
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
    );