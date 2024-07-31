function solve(jsonStr) {
  const person = JSON.parse(jsonStr);
  const tuples = Object.entries(person);
  for (const tuple of tuples) {
    console.log(`${tuple[0]}: ${tuple[1]} `);
  }
}
solve('{"name": "George", "age": 40, "town": "Sofia"}');
