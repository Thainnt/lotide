//IMPLEMENTATION CODE
const countLetters = function (str) {
  const countString = str.split(" ").join("").toLowerCase();
  let countResults = {};
  for (let char of countString) {
    if(countResults[char]) {
      countResults[char] += 1;
    } else {
      countResults[char] = 1;
    }
  }
  return countResults;
};

module.exports = countLetters;