const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);

describe ("#tail", () => {

  it('return ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('return [1, 2, 3] for [0, 1, 2, 3]', () => {
    assert.deepEqual(tail([0, 1, 2, 3]), [1, 2, 3]);
  });

  it('return empty array for empty array', () => {
    assert.deepEqual(tail([]), []);
  });

});