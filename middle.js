//FUNCTION IMPLEMENTATION 
const middle = function(array) {
  let middleArray = [];
  const getIndex = (array.length - 1) / 2;
  if (getIndex >= 1) {
    for (let i = Math.floor(getIndex); i <= Math.ceil(getIndex); i++) {
      middleArray.push(array[i]);
    }
  }
  return middleArray;
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
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    return true;
  } else {
    return false;
  }
};

//TEST CODE
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));