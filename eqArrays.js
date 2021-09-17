//FUNCTION IMPLEMENTATION
const eqArrays = function(ar1, ar2) {
  let result;
  if (ar1.length === ar2.length) {
    // BOTH ARRAYS ARE EMPTY
    if (ar1.length === 0) {
      return result = true;
    }
    //ARRAYS ARE NOT EMPTY
    for (let i = 0; i < ar1.length; i++) {
      if(ar1[i] === ar2[i]) { // BASE CASE: ONE LEVEL ARRAY
        result = true;
      } else {
        if (Array.isArray(ar1[i]) && Array.isArray(ar2[i])) { //CHECK IF THERE IS ANOTHER LEVEL OF ARRAY
          if (eqArrays(ar1[i], ar2[i])) {
            result = true;
          } else {
            return result = false;
          }
        } else {
          return result = false;
        }
      }
    }
  } else {
    return false;
  }

  return result;
}

// base all item of arrays are equal

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👻Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
// assertEqual(eqArrays([{type: "car", color: "black"}, {type: "bike", color: "green"}], [{type: "car", color: "black"}, {type: "bike", color: "green"}]), true); //test array of objects