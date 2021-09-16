//FUNCTION IMPLEMENTATION
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
    console.log(`🌕Assertion Passed: ${actual} === ${expected}`);
    return true;
  } else {
    console.log(`🌑Assertion Failed: ${actual} !== ${expected}`);
    return false;
  }
};

//TEST CODE
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => should PASS
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));

console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]));

console.log(assertArraysEqual([], [])); //test empty array
console.log(assertArraysEqual(["1", "2", ["3"]], ["1", "2", ["3"]])); // test nested arrays