const assert = require('chai').assert;
const head = require('../head');
const assertEqual = require('../assertEqual')

describe('#head', () => {
  it('should return 5 when passed and array begining with 5', () => {
    assert.strictEqual(head([5,2,3]), 5);
  })
  it('should return 5 when passed an array of only 5', () => {
    assert.strictEqual(head([5]), 5)
  })
  it('should return hello when passed an array beginning with hello', () => {
    assert.strictEqual(head(['hello', 'lighthouse', 'labs']), 'hello');
  })
})

// assertEqual(head([5,6,7]), 6);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");