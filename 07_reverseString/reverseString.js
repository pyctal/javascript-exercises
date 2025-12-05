const reverseString = function (str) {
  let returnString = "";
  for (let i = 0; i < str.length; i++) {
    returnString = str[i] + returnString;
  }
  return returnString;
};

// Do not edit below this line
module.exports = reverseString;
