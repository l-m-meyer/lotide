/*
* Function will return a new array based on the results of the callback function.
* @param {Array} arr
* @param {Function} callback 
* @return {Array} results 
*/
const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => { 
  const results = [];
  for (const item of arr) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


/**--------------- TESTS -------------------*/
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

const test1 = map([20, 10, 200], n => n/2);
const test2 = map(['pig', 'latin'], word => `${word.slice(1)}${word[0]}ay`);
const test3 = map([0, 1, 2, 3], i => `I am index: ${i}`);

assertArraysEqual(test1, [10, 5, 100], true); // => should PASS
assertArraysEqual(test2, ['igpay', 'atinlay'], true); // => should PASS
assertArraysEqual(test3, ['I am index: 0', 'I am index: 1', 'I am index: 2', 'I am index: 3'], true); // => should PASS