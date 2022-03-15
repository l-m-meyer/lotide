/*
* Function will take in an array and an object and return an object 
* containing the counts of everything that the input object listed.
* @param {Array} allItems
* @param {Ojbect} itemsToCount
* @return {Object} counts
*/
const countOnly = (allItems, itemsToCount) => {
  const counts = {};

  for (let item of allItems) {
    if (itemsToCount[item]) {
      if (counts[item]) {
        counts[item]++;
      } else {
        counts[item] = 1;
      }
    }
  }
  console.log(counts);
  return counts;
};

module.exports = countOnly;

