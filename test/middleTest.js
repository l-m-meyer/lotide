const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log('middle test');
// TEST CASES
let words = ["hello", "world", "lighthouse"];
middle(words); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"], true);

assertArraysEqual(middle([1, 2, 3]), [2], true);
assertArraysEqual(middle([2, 3]), [], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3], true);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4], true);
assertArraysEqual(middle([1, 2, 3, 4]), [2], false);