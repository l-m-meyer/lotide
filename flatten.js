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

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]