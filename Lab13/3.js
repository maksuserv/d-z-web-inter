let calculateSalary = function (dirty) {
  if (dirty < 100000) {
    return dirty - (dirty / 100) * 35;
  }

  return dirty - (dirty / 100) * 45;
};

console.log(Math.round(calculateSalary(50000)));
console.log(Math.round(calculateSalary(80000)));
console.log(Math.round(calculateSalary(110000)));
