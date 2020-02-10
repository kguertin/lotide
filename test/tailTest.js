const assert = require('chai').assert

const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe('#Tail', () => {
  it('Should return an array of three items when passed an array of four items', () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  })
  it('should return an empty arry if givena an array of lest than 2', () => {
    assert.deepEqual(tail([1]), []);
  })
  it('should return an array of strings if passed an array of strings with more than one element', () => {
    assert.deepEqual(tail(['toronto', 'raptors']), ['raptors']);
  })
});