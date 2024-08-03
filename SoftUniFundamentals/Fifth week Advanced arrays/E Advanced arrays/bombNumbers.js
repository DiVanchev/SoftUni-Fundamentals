function bombDetonate(sequence, bombInfo) {
  const [bombNumber, power] = bombInfo;

  let index;
  while ((index = sequence.indexOf(bombNumber)) !== -1) {
    let start = Math.max(0, index - power);
    let end = Math.min(sequence.length - 1, index + power);

    sequence.splice(start, end - start + 1);
  }

  let result = sequence.reduce((acc, num) => acc + num, 0);

  console.log(result);
}
bombDetonate([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
