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

//TEST CODE
console.log(assertArraysEqual((flatten([1, 2, [3, 4], 5, [6]])), [ 1, 2, 3, 4, 5, 6 ]));
console.log(assertArraysEqual((flatten([1, 2, [3, 4, "things"], 5, [], [6]])), [ 1, 2, 3, 4, "things", 5, 6 ]));
