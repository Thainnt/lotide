const assert = require('chai').assert;
const countLetters = require('../countLetters');
// const _ = require('../index');

describe("#countLetters", () => {

  it("return object counting letters of a string", () => {
    assert.deepEqual(countLetters("lighthouse in the house"), {
      l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1}
    )
  });
});