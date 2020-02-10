const assert = require('chai').assert
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it('Should return true if the objects are equal', () => {
    const result = eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3});
    assert.isTrue(result);
  })
  it('Should return false if the objects are not equal', () => {
    const result = eqObjects({a: 1, b: 2, c: 3}, {a: 1, b: 1, c: 3});
    assert.isFalse(result);
  })
});
