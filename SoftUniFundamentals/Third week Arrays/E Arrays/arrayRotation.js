function arrayRotation(arr, rotations) {
<<<<<<< HEAD
    for (let i = 0; i < rotations; i++) {
      let fElem = arr.shift();
      arr.push(fElem);
    }
    console.log(arr.join(' '));
  }
  arrayRotation([51, 47, 32, 61, 21], 2);
  =======
  for (let i = 0; i < rotations; i++) {
    let fElem = arr.shift();
    arr.push(fElem);
  }
  console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2);
>>>>>>> d1c870a7a35840a9ebcfd30b7f8cc0dc5086b28b
