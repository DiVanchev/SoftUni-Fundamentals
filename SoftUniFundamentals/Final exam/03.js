function solve(arr) {
  let socialData = {};
  let command = arr.shift();

  let followerCounter = 0;

  while (command !== "Log out") {
    let tokens = command.split(":");
    let action = tokens.shift();

    if (action === "New follower") {
      let name = tokens.shift();

      if (!socialData[name]) {
        socialData[name] = { likes: 0, comments: 0 };
        followerCounter++;
      }
    } else if (action === "Like") {
      let name = tokens.shift();
      let likesCounter = Number(tokens.shift());
      if (socialData[name]) {
        socialData[name].likes += likesCounter;
      } else {
        socialData[name] = { likes: likesCounter, comments: 0 };
        followerCounter++;
      }
    } else if (action === "Comment") {
      let name = tokens.shift();

      if (socialData[name]) {
        socialData[name].comments += 1;
      } else {
        socialData[name] = { likes: 0, comments: 1 };
        followerCounter++;
      }
    } else if (action === "Blocked") {
      let name = tokens.shift();
      if (socialData[name]) {
        delete socialData[name];
        followerCounter--;
      } else {
        console.log(`${name} doesn't exist.`);
      }
    }

    command = arr.shift();
  }
  console.log(`${followerCounter} followers`);

  let socialEntries = Object.entries(socialData);

  for (const [name, { likes, comments }] of socialEntries) {
    console.log(`${name}: ${likes + comments}`);
  }
}
solve([
  "Blocked: Amy",
  "Comment: Amy",
  "New follower: Amy",
  "Like: Tom: 5",
  "Like: Ellie: 5",
  "Log out",
]);
