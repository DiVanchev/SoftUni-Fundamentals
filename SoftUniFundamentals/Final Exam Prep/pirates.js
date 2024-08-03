function pirates(arr) {
  let citiesData = {};

  let command = arr.shift();

  while (command !== "Sail") {
    let tokens = command.split("||");
    let cityName = tokens[0];
    let cityPopulation = Number(tokens[1]);
    let cityGold = Number(tokens[2]);

    if (cityName in citiesData) {
      citiesData[cityName].population += cityPopulation;
      citiesData[cityName].gold += cityGold;
    } else {
      citiesData[cityName] = { population: cityPopulation, gold: cityGold };
    }

    command = arr.shift();
  }
  command = arr.shift();

  while (command !== "End") {
    let tokens = command.split("=>");
    let action = tokens[0];
    let cityName = tokens[1];

    if (action === "Plunder") {
      let peopleKilled = Number(tokens[2]);
      let goldStolen = Number(tokens[3]);

      citiesData[cityName].population -= peopleKilled;
      citiesData[cityName].gold -= goldStolen;

      console.log(
        `${cityName} plundered! ${goldStolen} gold stolen, ${peopleKilled} citizens killed.`
      );
      if (
        citiesData[cityName].population <= 0 ||
        citiesData[cityName].gold <= 0
      ) {
        console.log(`${cityName} has been wiped off the map!`);
        delete citiesData[cityName];
      }
    } else if (action === "Prosper") {
      let goldToBeAdded = Number(tokens[2]);

      if (goldToBeAdded < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        citiesData[cityName].gold += goldToBeAdded;
        console.log(
          `${goldToBeAdded} gold added to the city treasury. ${cityName} now has ${citiesData[cityName].gold} gold.`
        );
      }
    }

    command = arr.shift();
  }

  let cityEntries = Object.entries(citiesData);
  if (cityEntries.length === 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
    console.log(
      `Ahoy, Captain! There are ${cityEntries.length} wealthy settlements to go to:`
    );
    for (const [cityName, cityStats] of cityEntries) {
      console.log(
        `${cityName} -> Population: ${cityStats.population} citizens, Gold: ${cityStats.gold} kg`
      );
    }
  }
}


pirates([
  "Nassau||95000||1000",
  "San Juan||930000||1250",
  "Campeche||270000||690",
  "Port Royal||320000||1000",
  "Port Royal||100000||2000",
  "Sail",
  "Prosper=>Port Royal=>-200",
  "Plunder=>Nassau=>94000=>750",
  "Plunder=>Nassau=>1000=>150",
  "Plunder=>Campeche=>150000=>690",
  "End",
]);
