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

//TEST FUNCTION

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👻👻👻Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
const sentence = "lighthouse in the house";
console.log(assertEqual(countLetters(sentence)["l"], 1));
console.log(assertEqual(countLetters(sentence)["i"], 2));
console.log(assertEqual(countLetters(sentence)["g"], 1));
console.log(assertEqual(countLetters(sentence)["h"], 4));
console.log(assertEqual(countLetters(sentence)["t"], 2));
console.log(assertEqual(countLetters(sentence)["o"], 2));
console.log(assertEqual(countLetters(sentence)["u"], 2));
console.log(assertEqual(countLetters(sentence)["s"], 2));
console.log(assertEqual(countLetters(sentence)["e"], 3));
console.log(assertEqual(countLetters(sentence)["n"], 1));