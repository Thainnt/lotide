const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

//TEST CODE
console.log("One level arrays:")
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
console.log("Empty arrays:")
assertEqual(eqArrays([], []), true);
console.log("Nested arrays:")
assertEqual(eqArrays(["1", "2", ["3"]], ["1", "2", ["3"]]), true);
assertEqual(eqArrays([[0, 4, 9, [8, "a", "o"]], "2", ["3", 7, "10"]], [[0, 4, 9, [8, "a", "o"]], "2", ["3", 7, "10"]]), true);
assertEqual(eqArrays([[0, 4, 9, [8, "a", "o"]], "2", "8", ["3", 7, "10"]], [[0, 4, 9, [8, "a", "o"]], "2", ["3", 7, "10"]]), false);