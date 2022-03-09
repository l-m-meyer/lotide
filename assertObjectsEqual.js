/*
*
*
*
*/
const assertObjectsEqual = (actual, expectation) => {
  
};



/*
* Function will take in two objects and returns true or false, based on a perfect match.
* @param {Object}
* @param {Object}
* @return {Boolean}
*/
const eqObjects = (obj1, obj2) => {
  // get object keys and store as an array
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);

  // check if the object lengths are the same
  if (obj1Keys.length !== obj2Keys.length) {
    return false;
  }

  // checks that other object does not include key found in first object
  for (const key of obj1Keys) {
    if (!obj2Keys.includes(key)) {
      return false;
    }
  }
  
  // check if key value is an array
  for (const key of obj1Keys) {
    if (Array.isArray(obj1[key]) && !Array.isArray(obj2[key])) {
      return false;
    } else if (!Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      return false;
    } else if (Array.isArray(obj1[key]) && Array.isArray(obj2[key])) {
      //both key values are arrays
      // checks that the arrays are not equal
      if (!eqArrays(obj1[key], obj2[key])) {
        return false;
      }
    } else {
      // checks that the keys do not match
      if (obj1[key] !== obj2[key]){
        return false;
      }
    }
  } 
  return true;
};

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

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
/** primatives as values */
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

/** arrays as values */
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false