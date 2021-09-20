//FUNCTION IMPLEMENTATION 
const middle = function(array) {
  let middleArray = [];
  const getIndex = (array.length - 1) / 2;
  if (getIndex >= 1) {
    for (let i = Math.floor(getIndex); i <= Math.ceil(getIndex); i++) {
      middleArray.push(array[i]);
    }
  }
  return middleArray;
};

module.exports = middle;
