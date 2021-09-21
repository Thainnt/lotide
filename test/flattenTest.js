const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {

  it("return array of a flattened nested array", () =>{
    assert.deepEqual((flatten([1, 2, [3, 4], 5, [6]])), [ 1, 2, 3, 4, 5, 6 ]);
  });

  it("return array of a flattened nested array", () =>{
    assert.deepEqual((flatten([1, 2, [3, 4, "things"], 5, [], [6]])), [ 1, 2, 3, 4, "things", 5, 6 ]);
  });

});