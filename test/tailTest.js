const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it ("returns output: ['Lighthouse', 'Labs'] for input: ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it ("returns output: [] for input: ['Hello']", () => {
    assert.deepEqual(tail(['Hello']), []);
  });

  it ("returns output: [] for input: []", () => {
    assert.deepEqual(tail([]), []);
  })
});