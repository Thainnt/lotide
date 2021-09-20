const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemToRemove) {
  let withoutArray = [];
  for (let item of source) {
    if (!itemToRemove.includes(item)) {
      withoutArray.push(item);
    }
  }
  return withoutArray;
}

module.exports = without;

//TEST CASE
console.log(assertArraysEqual(without([1, 2, 3], [1]), [2, 3]));
console.log(assertArraysEqual(without([], [1, 4]), []));
console.log(assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]));
console.log(assertArraysEqual(without([1, 2, 3, 5, 8, 9], [1, 8, 12]), [2, 3, 5, 9]));
console.log(assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));