function aMinerTask(arr) {
  const rQ = {};

  for (let i = 0; i < arr.length; i += 2) {
    const resource = arr[i];
    const quantity = Number(arr[i + 1]);

    if (rQ.hasOwnProperty(resource)) {
      rQ[resource] += quantity;
    } else {
      rQ[resource] = quantity;
    }
  }
  
  const rQEntries = Object.entries(rQ);

  for (const [resource, quantity] of rQEntries) {
    console.log(`${resource} -> ${quantity}`);
  }
}
//aMinerTask(["Gold", "155", "Silver", "10", "Copper", "17"]);
aMinerTask(["gold", "155", "silver", "10", "copper", "17", "gold", "15"]);
