function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
      let fElem = arr.shift();
      arr.push(fElem);
    }
    console.log(arr.join(' '));
  }
  arrayRotation([51, 47, 32, 61, 21], 2);