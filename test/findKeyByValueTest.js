const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const pets = {
  dog: "Billy",
  cat: "Kat",
  hamster: "Ham",
  bird: "Rid",
  none: ""
};

describe("#findKeyByValue", () => {

  it("return true", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("return true", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("return true", () => {
    assert.strictEqual(findKeyByValue(pets, "Ham"), "hamster");
  });

});
