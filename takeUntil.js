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


const takeUntil = function(array, callback){
  let result = [];
  for (let num of array){
    if(callback(num)){
      return result;
    } else {
      result.push(num);
    }
  }
  return result;
}

module.exports = takeUntil;

const data1 = [1,2,5,7,2,-1,2,4,5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ['I\'ve', 'been', 'to', 'Hollywood', ',', 'I\'ve', 'been', 'to', 'Redwood'];
const results2 = takeUntil(data2, word => word === ',');

console.log(results1);
console.log('---------------------------------');
console.log(results2);
console.log('---------------------------------');

console.log(assertArraysEqual(results1, [1,2,5,7,2]));
console.log(assertArraysEqual(results2, ['You\'ve]', 'Been', 'to', 'Hollywood']));