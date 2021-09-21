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