// //Test/Assertion Functions
// const eqArrays = function(arr1, arr2) {
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = function(arr1, arr2) {
//   let result = eqArrays(arr1, arr2);
//   return result ? 'The arrays are equal' : 'The arrays are not equal';
// };

//Actual FUnction 
const middle = function(arr) {
  let output = []
  let middle = Math.round((arr.length - 1) / 2);

  if (arr.length < 3){
    return output;
  }

  if (arr.length % 2 !== 0){
    output.push(arr[middle]);
  } else if (arr.length % 2 === 0) {
    output.push(arr[middle - 1], arr[middle]);
  }

  return output;
}

module.exports = middle;
