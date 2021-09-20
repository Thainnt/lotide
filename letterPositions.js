const assertArraysEqual = require('./assertArraysEqual');

//IMPLEMENTATION CODE

const letterPositions = function(sentence) {
  const results = {};
  const countStr = sentence.toLowerCase();
  
  for (let i = 0; i < countStr.length; i++) {
    if (countStr.charAt(i) !== " ") {
      if(results[countStr.charAt(i)]) {
        results[countStr.charAt(i)].push(i);
      } else {
        results[countStr.charAt(i)] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

console.log(letterPositions("lighthouse in the house"));
const str = "hello";
console.log(assertArraysEqual(letterPositions(str)["h"], [0]));
console.log(assertArraysEqual(letterPositions(str)["e"], [1]));
console.log(assertArraysEqual(letterPositions(str)["l"], [2, 3]));
console.log(assertArraysEqual(letterPositions(str)["o"], [4]));