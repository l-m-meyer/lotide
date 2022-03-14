const eqArrays = require('./eqArrays');

// TEST FUNCTION FOR ARRAYS
const assertArraysEqual = (arr1, arr2, expected) => {
  if (eqArrays(arr1, arr2) === expected) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;