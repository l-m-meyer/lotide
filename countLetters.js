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
const abc = countLetters('aaa bb c');
assertEqual(abc['a'], 3);
assertEqual(abc['b'], 2);
assertEqual(abc['c'], 1);

const lighthouse = countLetters('light hip lab');
assertEqual(lighthouse['l'], 2);
assertEqual(lighthouse['i'], 2);
assertEqual(lighthouse['g'], 1);
assertEqual(lighthouse['h'], 2);
assertEqual(lighthouse['t'], 1);
assertEqual(lighthouse['p'], 1);
assertEqual(lighthouse['a'], 1);
assertEqual(lighthouse['b'], 1);