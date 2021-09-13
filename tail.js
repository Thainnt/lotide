//FUNCTION IMPLEMENTATION
const tail = function(array) {
  let tail = array.slice(1);
  return tail;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎊🎊🎊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👻👻👻Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case: Check array with one element, empty array, nested array
const exTest = ["3"];
console.log(tail(exTest));
const empTest = [];
console.log(tail(empTest));
const nestedTest = [[2, 3], 7, [4, 8, 9]];
console.log(tail(nestedTest));