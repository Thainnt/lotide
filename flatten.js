const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (ar) {
  let flattenArray = [];
  for (let item of ar) {
    if (Array.isArray(item)) {
      for (let childItem of item) {
        flattenArray.push(childItem);
      }
    } else {
      flattenArray.push(item);
    }
  }
  return flattenArray;
};

module.exports = flatten;

//TEST CODE
console.log(assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [ 1, 2, 3, 4, 5, 6 ]));
console.log(assertArraysEqual((flatten([1, 2, [3, 4, "things"], 5, [], [6]])), [ 1, 2, 3, 4, "things", 5, 6 ]));
