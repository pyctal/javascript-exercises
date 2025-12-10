const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((sum, curr) => sum + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((product, curr) => product * curr, 1);
};

const power = function (x, y) {
  return x ** y;
};

const factorial = function (n) {
  let factorial = 1;
  for (let i = n; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
