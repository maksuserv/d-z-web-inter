let numbers = [1, 2, 1, 4, 1];
let number = 1;

let lastIndex = -1;
for (let index = 0; index < numbers.length; index++) {
  if (number === numbers[index]) {
    lastIndex = index;
  }
}

alert(lastIndex);

for (let i = 0; i <= numbers.length - 2; i++) {
  let minValue = numbers[i];
  for (let j = i + 1; j <= numbers.length - 1; j++) {
    if (numbers[j] < minValue) {
      minValue = numbers[j];
      let swap = numbers[i];
      numbers[i] = minValue;
      numbers[j] = swap;
    }
  }
}

lastIndex = "элемент не найден";
for (let index = 0; index < numbers.length; index++) {
  if (number === numbers[index]) {
    lastIndex = index;
  }
}

console.log(lastIndex);
