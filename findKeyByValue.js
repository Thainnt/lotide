//IMPLEMENTATION
const findKeyByValue = function (ob, val) {
  let result;
  const keyList = Object.keys(ob);
  for (let key of keyList) {
    if (ob[key] === val) {
    result = key;
    }  
  }
  return result;
}


//TEST FUNTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`👻👻👻Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const pets = {
  dog: "Billy",
  cat: "Kat",
  hamster: "Ham",
  bird: "Rid",
  none: ""
}
assertEqual(findKeyByValue(pets, "Ham"), "hamster");
assertEqual(findKeyByValue(pets, ""), "none");
assertEqual(findKeyByValue(pets, "cat"), undefined);