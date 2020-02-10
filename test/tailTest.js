const assert = require('chai').assert

const tail = require('../tail');
const assertEqual = require('../assertEqual');

describe('#Tail', () => {
  it('Should return an array of three items when passed an array of four items', () => {
    assert.deepEqual(tail([1,2,3,4]), [2,3,4]);
  })
})

// const [1,2,3,4]
// const words = ['Toronto', 'Raptors', 'NBA', 'Champions'];
// tail(words);
// assertEqual(words.length, 4);