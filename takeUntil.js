/**
 *  Function will return a slice of an array.
 * @param {Array} arr
 * @param {Function} callback
 * @return {Array} result
 */
const takeUntil = (arr, callback) => {
  const result = [];
  for (const item of arr) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  } return result;
};

/**------------------------ TESTS ---------------------------*/
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
// TEST CASE 1
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);

assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ], true); // => should PASS

// TEST CASE 2
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ], true); // => should PASS


