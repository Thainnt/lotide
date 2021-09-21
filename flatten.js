// const assertArraysEqual = require('./assertArraysEqual');

const flatten = function (ar) {
  let flattenArray = [];
  for (let item of ar) {
    if (Array.isArray(item)) {
      for (let childItem of item) {
        flattenArray.push(childItem);
      }
    } else {
      flattenArray.push(item);
    }
  }
  return flattenArray;
};

module.exports = flatten;