/*
* Function will take in two objects and returns true or false, based on a perfect match.
* @param {Object}
* @param {Object}
* @return {Boolean}
*/
const eqObjects = (obj1, obj2) => {

};

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(ab, abc); // => false