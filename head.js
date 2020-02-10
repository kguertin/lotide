// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`\u{1F5D1}  Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const assertEqual = require('./assertEqual');


const head = function(array) {
  let firstElem = array[0];

  if (array.length < 1) {
    return undefined;
  }

  return firstElem;
};

module.exports = head