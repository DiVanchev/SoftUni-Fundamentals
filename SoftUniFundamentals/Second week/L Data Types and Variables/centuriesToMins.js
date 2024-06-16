function centuriesToMins(century){
    const years = century * 100;
    const days = Math.trunc(years * 365.2422);
    const hours = days * 24;
    const mins = hours * 60;

    console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${mins} minutes`);
}