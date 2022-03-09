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



/*------------------- TESTS -----------------*/

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);