//FUNCTION IMPLEMENTATION
const eqArrays = function(ar1, ar2) {
  let result;
  if (ar1.length === ar2.length) {
    // BOTH ARRAYS ARE EMPTY
    if (ar1.length === 0) {
      return result = true;
    }
    //ARRAYS ARE NOT EMPTY
    for (let i = 0; i < ar1.length; i++) {
      if(ar1[i] === ar2[i]) { // BASE CASE: ONE LEVEL ARRAY
        result = true;
      } else {
        if (Array.isArray(ar1[i]) && Array.isArray(ar2[i])) { //CHECK IF THERE IS ANOTHER LEVEL OF ARRAY
          if (eqArrays(ar1[i], ar2[i])) {
            result = true;
          } else {
            return result = false;
          }
        } else {
          return result = false;
        }
      }
    }
  } else {
    return false;
  }

  return result;
}
module.exports = eqArrays;
