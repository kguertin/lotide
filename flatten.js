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

// Actual Function
const flatten = function(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++){
        if (!Array.isArray(arr[i][j])){
          newArr.push(arr[i][j])
        }
      }
    }
  }
  return newArr
}

console.log(flatten([1,2,3,[4,5],6]));
console.log(flatten([1,[2,3],[4,5],[6,7]]))