/*
* Function takes a source array and an itemsToRemove array and 
* returns and array with only those elements from source that are 
* not present in the itemsToRemove array.
* @param {Array} source 
* @param {Array} itemsToRemove
* @result {Array} arr without matching items in itemsToRemove
*/
const without = (source, itemsToRemove) => {
  // initialize empty array
  const arr = [];

  // iterate over source array
  for (const item of source) {
    if (!itemsToRemove.includes(item)) {
      arr.push(item);
    }
  } return arr;
};

console.log(without([1, 2, 3], [1])) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]
console.log(without([1, 2, 3], [4, 5, 6])); // => [1, 2, 3];

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

// will pass
let words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);

assertArraysEqual(without([1, 2, 3], [1]), [2, 3], true);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"], true);
assertArraysEqual(without([1, 2, 3], [1, 2, 3]), [], true);
assertArraysEqual(without([1, 2, 3], []), [], false);