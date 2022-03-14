const head = require('../head.js');
const assertEqual = require('../assertEqual');


// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]),);
assertEqual(head([1]), 1);