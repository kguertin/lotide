// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`\u{1F5D1}  Assertion Failed: ${actual} !== ${expected}`);
//   }
 
const assertEqual = require('./assertEqual');


const tail = function(array) {
  let arrayTail = array.slice(1);
  
  if (array.length < 2) {
    arrayTail = [];
  }

  return arrayTail;
};


module.exports = tail;