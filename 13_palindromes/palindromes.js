const palindromes = function (str) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz1234567890";
  const cleanStr = str
    .toLowerCase()
    .split("")
    .filter((char) => alphanumerical.includes(char))
    .join("");
  console.log(cleanStr);

  for (let index = 0; index < cleanStr.length / 2; index++) {
    if (cleanStr.at(index) !== cleanStr.at(-1 - index)) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
