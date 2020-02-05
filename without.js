//Test/Assertion Functions
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

// Actual Functuon
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++){
    let push = true;
    for (let j = 0; j < itemsToRemove.length; j++){ 
      if (source[i] === itemsToRemove[j]) {
        push = false
      }
    }
    if (push) {
      newArray.push(source[i]);
    }
  }
  return newArray
}

console.log(without([1,2,3,], [4, 5, 3]));
console.log(without(['lets', 'go', 'celtics', false], ['raptors', 'celtics', false]));

console.log(assertArraysEqual(without([1,2,3,8, 9], [6,7,8]), [1,2,3,9]));

