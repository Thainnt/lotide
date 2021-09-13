//FUNCTION IMPLEMENTATION
const head = function(array) {
  let headItem = array[0];
  return headItem;
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎊🎊🎊Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👻👻👻Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([3]), 5);
assertEqual(head([]), 5);