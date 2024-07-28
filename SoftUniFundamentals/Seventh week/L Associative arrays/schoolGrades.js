function schoolGrades(arr) {
  let studentGrades = {};

  for (const entry of arr) {
    let spacedOut = entry.split(" ");
    let name = spacedOut[0];

    if (!studentGrades[name]) {
      studentGrades[name] = [];
    }

    for (let i = 1; i < spacedOut.length; i++) {
      let grade = Number(spacedOut[i]);

      if (!isNaN(grade)) {
        studentGrades[name].push(grade);
      }
    }
  }

  const sortedNames = Object.keys(studentGrades).sort();

  for (const student of sortedNames) {
    let grades = studentGrades[student];
    let total = grades.reduce((sum, grade) => sum + grade, 0);
    let average = total / grades.length;
    console.log(`${student}: ${average.toFixed(2)}`);
  }
}

schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
// schoolGrades(["Steven 3 5 6 4", "George 4 6", "Tammy 2 5 3", "Steven 6 3"]);
