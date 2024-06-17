function requiredReading(numPages, pagesOneHour, deadline) {
    let totalHours = numPages / pagesOneHour;
    let hoursPerDay = totalHours / deadline;
  
    console.log(hoursPerDay);
  }