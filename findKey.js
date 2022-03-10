/**
 * Function takes in an object and a callback, scans the object, 
 * and returns the first key for which the callback returns a 
 * truthy value. If no key is found, return undefined.
 * @param {Object} obj 
 * @param {Function} callback 
 * @returns {String} key
 */
const findKey = (obj, callback) => {
  for (const key in obj) {
    console.log(callback(obj[key]));
  }
};

findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

/**--------------------------- TESTS ----------------------------*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(1, 2);
// assertEqual("Bootcamp", "Bootcamp");