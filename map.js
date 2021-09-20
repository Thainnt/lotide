const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word.slice(-1));
console.log(assertArraysEqual(results1, ['d', 'l', 'o', 'r', 'm']));

const results2 = map(words, word => word.length);
console.log(assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]));

const results3 = map(words, word => word.length > 4);
console.log(assertArraysEqual(results3, [ true, true, false, true, false ]));