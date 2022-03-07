// Function returns the tail of an array
// tail is everything except for the first item of the array
const tail = function(arr) {
  return arr.slice(1);
};

// TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

// Test Case 1: Check the returned array elements
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements
const result2 = tail(["Hello"]);
assertEqual(result2.length, 0);
assertEqual(result2[0],);

// Test Case 3: Check the returned array elements
const result3 = tail([]);
assertEqual(result3.length, 0);
assertEqual(result3[0],);