//FUNCTION IMPLEMENTATION
const without = function(source, itemToRemove) {
  let withoutArray = [];
  for (let item of source) {
    if (!itemToRemove.includes(item)) {
      withoutArray.push(item);
    }
  }
  return withoutArray;
}

const eqArrays = function(ar1, ar2) {
  if (ar1.length === ar2.length) {
    for (let i = 0; i < ar1.length; i++) {
      if(ar1[i] !== ar2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return true;
  } else {
    return false;
  }
};

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