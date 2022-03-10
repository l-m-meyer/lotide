/**
 *  Function will return a slice of an array.
 * @param {Array} arr
 * @param {Function} callback
 * @return {Array} result
 */
const takeUntil = (arr, callback) => {
  const result = [];
  for (const item of arr) {
    if (callback(item)) {
      return result;
    } else {
      result.push(item);
    }
  } return result;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);