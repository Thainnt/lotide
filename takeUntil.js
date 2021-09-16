//IMPLEMENT CODE
const takeUntil = function(array, callback) {
  let results = [];
  for (const x of array) {
    if (callback(x)) {
      return results;
    }
    results.push(x);
  }
  return results;
}

//TESTING FUNCTIONS
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
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);
console.log(assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]))
console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
console.log(assertArraysEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]));