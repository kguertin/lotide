const assert = require('chai').assert;

const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

describe('#Middle', () => {
it('should return an array with a single number if passed an array with an even number of elements', () => {
  assert.deepEqual(middle([1,2,3]), [2]);
})
it('should return an array with two elements if passed an array with an even number of elements', () => {
  assert.deepEqual(middle([1,2,3,4]), [2,3])
})
it('should return an empty array if given an array with a length of < 3', () => {
  assert.deepEqual(middle([1]), []);
})
it('should return an empty array if passed and empty array', () => {
  assert.deepEqual(middle([]), []);
})
})