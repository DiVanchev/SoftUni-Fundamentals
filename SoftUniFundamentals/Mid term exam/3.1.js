function phoneShop(arr) {
    let newArr = arr.shift().split(', ');

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i];

        if (command.startsWith("Add")) {
            const allCommands = command.split(" - ");
            const phone = allCommands[1];
            if (!newArr.includes(phone)) {
                newArr.push(phone);
            }
        } else if (command.startsWith("Remove")) {
            const allCommands = command.split(" - ");
            const phone = allCommands[1];
            const index = newArr.indexOf(phone);
            if (index !== -1) {
                newArr.splice(index, 1);
            }
        } else if (command.startsWith("Bonus phone")) {
            const allCommands = command.split(" - ");
            const phones = allCommands[1].split(":");
            const oldPhone = phones[0];
            const newPhone = phones[1];
            const index = newArr.indexOf(oldPhone);
            if (index !== -1) {
                newArr.splice(index + 1, 0, newPhone);
            }
        } else if (command.startsWith("Last")) {
            const allCommands = command.split(" - ");
            const phone = allCommands[1];
            const index = newArr.indexOf(phone);
            if (index !== -1) {
                newArr.splice(index, 1);
                newArr.push(phone);
            }
        } else if (command.startsWith("End")) {
            console.log(newArr.join(", "));
            break;
        }
    }
}

// Example usage:
phoneShop([
    "SamsungA50, MotorolaG5, IphoneSE",
    "Add - Iphone10",
    "Remove - IphoneSE",
    "End"
]);

phoneShop([
    "HuaweiP20, XiaomiNote",
    "Remove - Samsung",
    "Bonus phone - XiaomiNote:Iphone5",
    "End"
]);

phoneShop([
    "SamsungA50, MotorolaG5, HuaweiP10",
    "Last - SamsungA50",
    "Add - MotorolaG5",
    "End"
]);
