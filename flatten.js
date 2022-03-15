const assertArraysEqual = require('./assertArraysEqual');
/*
* Function will take in an array containing elements including 
* nested arrays of elements, and return a "flattened" version of the array
* @param {Array} arr
* @result {Array} flattened
*/
const flatten = arr => {
  // initialize an empty array
  const flattenedArr = [];

  // iterate over array
  for (const item of arr) {
    if (!Array.isArray(item)) {
      flattenedArr.push(item);
    } else {
      for (const ele of item) {
        flattenedArr.push(ele);
      }
    }
  } return flattenedArr;
};

module.exports = flatten;