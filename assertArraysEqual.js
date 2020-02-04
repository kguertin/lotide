const eqArrays = function(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arr1, arr2) {
  let result = eqArrays(arr1, arr2);
  return result ? 'The arrays are equal' : 'The arrays are not equal';
};

console.log(assertArraysEqual([1,2,3],[1,2,3]));
console.log(assertArraysEqual([1,2,3],[1,2,'3']));