/*
* Function returns all the indices in a string where each character is found.
* @param {String} sentence
* @return {Object} results
*/
const letterPositions = sentence => {
  const results = {};

  // iterates over the length of the sentence string
  for (let i = 0; i < sentence.length; i++) {
    const arr = [];

    // checks if the character at the index is a space
    // skips if true
    if (sentence[i] === ' ') {
      continue;
    }

    // checks if letter exists in results object
    // pushes the index to the existing key in object
    // else adds key to object then pushes the index to new key in object
    if (results[sentence[i]]){
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = arr;
      arr.push(i);
    }
  }
  return results;
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

assertArraysEqual(letterPositions("hello").e, [1], true);
assertArraysEqual(letterPositions(" hel lo").e, [2], true);