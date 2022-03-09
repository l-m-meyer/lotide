/*
* Function takes in a String sentence and returns a count of each of the letters in that sentence.
* @param {String} sentence
* @returns {Object} result
*/
const countLetters = sentence => {
  // remove spaces from sentence
  const str = sentence.split(' ').join('');
  const result = {};

  for (const letter of str) {
    if (result[letter]) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  } return result;
};

console.log(countLetters('aaa bb c'));
/*------------------- TESTS -----------------*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE