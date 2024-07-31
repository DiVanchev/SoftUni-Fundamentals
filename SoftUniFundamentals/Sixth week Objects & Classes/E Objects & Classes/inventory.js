function inventory(arr) {
  const heroes = arr.map((line) => {
    const [name, level, items] = line.split(" / ");
    return {
      name: name,
      level: Number(level),
      items: items ? items : [],
    };
  });

  heroes.sort((a, b) => a.level - b.level);

  for (const hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}
inventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
