/*
* Function takes an array and returns the middle most element(s) of the given array
* @param {Array} arr
* @return {Array} result
*/
const middle = arr => {
  const len = arr.length;
  const midLen = Math.floor(len/2);
  let result = [];

  // checks if the length of the array is less than or equal to 2
  // if true returns an empty array
  if (len <= 2) {
    return result;
  } 
  // checks if array length is odd or even
  if (!(len % 2 === 0))  {
      result.push(arr[midLen]);
  } else {
      result.push(arr[midLen - 1]);
      result.push(arr[midLen]);
  }
  return result;
};

module.exports = middle;