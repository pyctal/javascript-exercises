const fibonacci = function (n) {
  n = typeof n === "number" ? n : parseInt(n);
  if (n < 0) {
    return "OOPS";
  } else if (n === 0) {
    return 0;
  }

  let firstPrev = 1;
  let secondPrev = 0;
  for (let i = 2; i <= n; i++) {
    [firstPrev, secondPrev] = [firstPrev + secondPrev, firstPrev];
  }

  return firstPrev;
};

// Do not edit below this line
module.exports = fibonacci;
