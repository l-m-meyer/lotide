/*
* Function will return a new array based on the results of the callback function.
* @param {Array} arr
* @param {Function} cb //shorthand for callback
* @return {Array} newArr 
*/
const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);