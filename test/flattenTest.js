const assert = require('chai').assert;

const flatten = require('../flatten');

describe('#Flatten', () => {
  it('Should return a single array if given an array containing one other array', () => {
    assert.deepEqual(flatten([1,2,3,[4,5],6]), [1,2,3,4,5,6]);
  })
  it('Should return a single array if passed an array containing multipul arrays', () => {
    assert.deepEqual(flatten([1,[2,3],[4,5],[6,7]]), [1,2,3,4,5,6,7])
  })
})



// console.log(flatten([1,2,3,[4,5],6]));
// console.log(flatten([1,[2,3],[4,5],[6,7]]))