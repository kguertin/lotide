const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

console.log(middle([1,2,3,4,5,6,9]))
console.log(middle([1,6,4,8]));

console.log(assertArraysEqual(middle([1, 2,  6, '4', 3, 8]), middle([3, 6, '4', 1])));