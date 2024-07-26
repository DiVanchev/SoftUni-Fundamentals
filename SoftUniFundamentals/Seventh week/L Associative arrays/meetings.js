function meetings(arr) {
  let scheduledMeetings = {};

  for (const entries of arr) {
    let [day, name] = entries.split(" ");

    if (scheduledMeetings[day]) {
      console.log(`Conflict on ${day}!`);
    } else {
      scheduledMeetings[day] = name;
      console.log(`Scheduled for ${day}`);
    }
  }

  for (const [day, name] of Object.entries(scheduledMeetings)) {
    console.log(`${day} -> ${name}`);
  }
}
//meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);

meetings(['Friday Bob',
   'Saturday Ted',
   'Monday Bill',
   'Monday John',
       'Wednesday George']
);
