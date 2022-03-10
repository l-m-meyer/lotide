/*
* Function will return a new array based on the results of the callback function.
* @param {Array} arr
* @param {Function} callback 
* @return {Array} results 
*/
const words = ["ground", "control", "to", "major", "tom"];

const map = (arr, callback) => { 
  const results = [];
  for (const item of arr) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);