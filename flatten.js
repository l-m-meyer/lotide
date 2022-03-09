/*
* Function will take in an array containing elements including 
* nested arrays of elements, and return a "flattened" version of the array
* @param {Array} arr
* @result {Array} flattened
*/
const flatten = arr => {
  // initialize an empty array
  const flattenedArr = [];

  // iterate over array
  for (const item of arr) {
    if (!Array.isArray(item)) {
      flattenedArr.push(item);
    } else {
      for (const ele of item) {
        flattenedArr.push(ele);
      }
    }
  } return flattenedArr;
};

/*------------------- TESTS -----------------*/

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

// TEST CASES
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true);
assertArraysEqual(flatten([[1, 2], [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6], true);
assertArraysEqual(flatten(['a', ['b', 'c']]), ['a', 'b', 'c'], true);