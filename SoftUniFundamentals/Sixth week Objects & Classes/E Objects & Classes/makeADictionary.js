function combineAndSortDefinitions(arr) {
  let dictionary = {};

  for (const jsonString of arr) {
    let parsedObject = JSON.parse(jsonString);
    for (const [term, definition] of Object.entries(parsedObject)) {
      dictionary[term] = definition;
    }
  }

  const sortedTerms = Object.keys(dictionary).sort();

  for (const term of sortedTerms) {
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
  }
}

combineAndSortDefinitions([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}',
]);
