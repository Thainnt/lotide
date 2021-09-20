const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CODE
console.log(assertArraysEqual(middle([1]), []));
console.log(assertArraysEqual(middle([1, 2]), []));
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));