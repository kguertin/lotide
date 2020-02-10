const assert = require('chai').assert;

const eqArrays = require('../eqArrays');

describe('#eqArraysTest', () => {
  it('Should return true if the arrays are equal', () => {
    const result = eqArrays([1,2,3],  [1,2,3])
    assert.isTrue(result);
  })
  it('Should return false if the arrays are not equal', () => {
    const result = eqArrays([1,2,3], [3,2,1]);
    assert.isFalse(result)
  })
})