function employees (arr){
    let allEmployees = [];
    
    for (const employeeName of arr) {
        const personalNumber = employeeName.length;

        const employeeObj = {
            employeeName,
            personalNumber
        };

        allEmployees.push(employeeObj);
    }
    for (const employeeOObj of allEmployees) {
        console.log(`Name: ${employeeOObj.employeeName} -- Personal Number: ${employeeOObj.personalNumber}`);
    }

}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );