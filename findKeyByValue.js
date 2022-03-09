/*
* Function takes in an object and a value, scans the object and 
* returns the first key that contains the given value. If no key is 
* found, returns undefined.
* @param {Object} obj
* @param {String} value
* @returns {String} key
*/
const findKeyByValue = (obj, value) => {
  const keys = Object.keys(obj);

  for (const key of keys) {
    if (obj[key] === value) {
      return key;
    }
  }
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
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "comedy");
