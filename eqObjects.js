const eqArrays = require('./eqArrays');

//IMPLEMENTATION CODE
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
      } else if (object1[key] === object2[key]) {
        result = true;
      } else {
        if (!eqObjects(object1[key], object2[key])/*object1[key] !== object2[key]*/) {
          return result = false;
        } else {
          result = true;
        }
      }
    }
  }
  return result;
};

module.exports = eqObjects;


//TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😱Assertion Failed: ${actual} !== ${expected}`);
  }
};
//TEST CODE
//PRIMITIVE VALUES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc), false));
//ARRAY VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(assertEqual(eqObjects(cd, dc), true));

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false));
//OBJECTS
console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true));
console.log(assertEqual(eqObjects({ a: { z: {i: 3, j : {n: 0}} }, b: 2 }, { a: { z: {i: 3, j : {n: 0}} }, b: 2 }), true));
console.log(assertEqual(eqObjects({ a: { z: {i: [9, 8, 7], j : {n: 0}} }, b: 2 }, { a: { z: {i: [9, 8, 7], j : {n: 0}} }, b: 2 }), true));
console.log(assertEqual(eqObjects({ a: { z: {i: 3, j : {n: 0}} }, b: 2 }, { a: { z: {i: 3, j : {n: [1, 2]}} }, b: 2 }), false));
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false));
console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false)); // => false