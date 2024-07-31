function companyUsers(arr) {
  const companyEmployees = {};

  for (const employeeData of arr) {
    const [company, employeeId] = employeeData.split(" -> ");

    if (company in companyEmployees) {
      
      if (!companyEmployees[company].includes(employeeId)) {
        companyEmployees[company].push(employeeId);
      }
    } else {
      companyEmployees[company] = [employeeId];
    }
  }
  
  const companyEntries = Object.entries(companyEmployees).sort((a, b) => a[0].localeCompare(b[0]));

  for (const [company, employeeArr] of companyEntries) {
      console.log(`${company}`);      
      for (const employeeId of employeeArr) {
          console.log(`-- ${employeeId}`);
      }
  }

}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> BB12345",
]);
//companyUsers([
//  "SoftUni -> AA12345",
//  "SoftUni -> CC12344",
//  "Lenovo -> XX23456",
//  "SoftUni -> AA12345",
//  "Movement -> DD11111",
//]);
