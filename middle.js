/*
* Function takes an array and returns the middle most element(s) of the given array
* @param {Array} arr
* @return {Array} result
*/
const middle = arr => {
  const len = arr.length;
  const midLen = Math.floor(len/2);
  let result = [];

  // checks if the length of the array is less than or equal to 2
  // if true returns an empty array
  if (len <= 2) {
    return result;
  } 
  // checks if array length is odd or even
  if (!(len % 2 === 0))  {
      result.push(arr[midLen]);
  } else {
      result.push(arr[midLen - 1]);
      result.push(arr[midLen]);
  }
  return result;
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
let words = ["hello", "world", "lighthouse"];
middle(words); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);

assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([2, 3]), [], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2], false);