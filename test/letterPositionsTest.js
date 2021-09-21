const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPostions", () => {

  it("return object of letter with arrays of position", () => {
    assert.deepEqual(letterPositions("hello"), {
      h: [0], e: [1], l: [2, 3], o: [4]
    });
  });
});
