const { findKey } = require('.');
// const assertEqual = require('./assertEqual');

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
};

module.exports = findKeyByValue;
