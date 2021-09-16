//IMPLEMENTATION FUNCTION

const map = function(array, callback) {

  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//TEST FUNCTION 
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

// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word.slice(-1));
console.log(assertArraysEqual(results1, ['d', 'l', 'o', 'r', 'm']));

const results2 = map(words, word => word.length);
console.log(assertArraysEqual(results2, [ 6, 7, 2, 5, 3 ]));

const results3 = map(words, word => word.length > 4);
console.log(assertArraysEqual(results3, [ true, true, false, true, false ]));