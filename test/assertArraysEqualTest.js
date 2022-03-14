const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual([1, 2, 3], [1, 2, 3], true); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, "3"], false); // => should PASS
assertArraysEqual([1, 2, 3], [0, 12, -3, 8], false); // => should PASS