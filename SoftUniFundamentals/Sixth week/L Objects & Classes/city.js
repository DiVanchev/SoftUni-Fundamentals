function solve(city) {
    const keys = Object.keys(city);
    for (const key of keys){
        const value = city[key];
        console.log(`${key} -> ${value}`);
    };
}
solve({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
  });