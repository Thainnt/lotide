// SUPPORT FUNCTIONS
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

const eqObjects = function(object1, object2) {
  let result;
  const keyList1 = Object.keys(object1);
  const keyList2 = Object.keys(object2);
  if (keyList1.length !== keyList2.length) {
    return result = false;
  } else {
    for (let key of keyList1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return result = false;
        }
      } else {
        if (object1[key] !== object2[key]) {
          return result = false;
        } else {
          result = true;
        }
      }
    }
  }
  return result;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`🌕Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    return true;
  } else {
    console.log(`🌑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    return false;
  }
};

//TEST CODE
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2);