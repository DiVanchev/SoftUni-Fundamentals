function legendaryFarming(str) {
    const materials = { shards: 0, fragments: 0, motes: 0 };
    const junk = {};
    const legendaries = {shards: "Shadowmourne", fragments: "Valanyr", motes: "Dragonwrath"};

    const array = str.split(" ");
    for (let i = 0; i < array.length; i += 2) {
        const quantity = +array[i];
        const material = array[i + 1].toLowerCase();
        
        if(material in materials){
            materials[material] += quantity;
            if(materials[material] >= 250){
                materials[material] -= 250;
                const legendaryWon = legendaries[material];
                console.log(`${legendaryWon} obtained!`);
                break;
            }
        }else if(material in junk){
            junk[material] += quantity;
        }else{
            junk[material] = quantity;
        }
    }
    const junkEntries = Object.entries(junk);
    const materialsEntries = Object.entries(materials);
    
    junkEntries.sort((a,b) => a[0].localeCompare(b[0]));
    materialsEntries.sort((a,b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    
    materialsEntries.forEach(([material, quantity]) => console.log(`${material}: ${quantity}`));
    junkEntries.forEach(([material, quantity]) => console.log(`${material}: ${quantity}`));
}
legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');