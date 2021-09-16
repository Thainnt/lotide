//IMPLEMENTATION CODE
const findKey = function (aObj, callback) {
  let result;
  const keyList = Object.keys(aObj);
  for (let key of keyList) {
    if (callback(aObj[key])) {
    result = key;
    return result;
    }  
  }
  return result;
}

//TESTING FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👻👻👻Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
console.log(assertEqual (
  findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2), "noma"));
