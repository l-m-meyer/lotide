/*
* Function will take in two objects and returns true or false, based on a perfect match.
* @param {Object}
* @param {Object}
* @return {Boolean}
*/
const eqObjects = (obj1, obj2) => {
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // check if the object lengths are the same
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  
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
eqObjects(assertEqual(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(assertEqual(ab, abc)); // => false