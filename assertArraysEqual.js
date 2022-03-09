/*
* Function takes in two arrays and returns true or false based on a perfect match
* @param {Array} arr1
* @param {Array} arr2
* @result {Boolean} true or false
*/
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    } return true;
};

// TEST FUNCTION FOR ARRAYS
const assertArraysEqual = (arr1, arr2, expected) => {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"], false); // => should PASS
assertArraysEqual([1, 2, 3], [0, 12, -3, 8], false); // => should PASS