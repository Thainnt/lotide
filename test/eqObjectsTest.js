const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

//PRIMITIVE VALUES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
//ARRAY VALUES
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
//OBJECTS
// console.log(assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true));
// console.log(assertEqual(eqObjects({ a: { z: {i: 3, j : {n: 0}} }, b: 2 }, { a: { z: {i: 3, j : {n: 0}} }, b: 2 }), true));
// console.log(assertEqual(eqObjects({ a: { z: {i: [9, 8, 7], j : {n: 0}} }, b: 2 }, { a: { z: {i: [9, 8, 7], j : {n: 0}} }, b: 2 }), true));
// console.log(assertEqual(eqObjects({ a: { z: {i: 3, j : {n: 0}} }, b: 2 }, { a: { z: {i: 3, j : {n: [1, 2]}} }, b: 2 }), false));
// console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false));
// console.log(assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false));

describe("#eqObjects", () => {

  it("return true for two identical objects", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("return false for two different objects ", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  it("return true for two identical objects with array values", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("return true for two identical objects with object values", () => {
    assert.strictEqual(eqObjects({ a: { z: {i: [9, 8, 7], j : {n: 0}} }, b: 2 }, { a: { z: {i: [9, 8, 7], j : {n: 0}} }, b: 2 }), true);
  });

});