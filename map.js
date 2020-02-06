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

const startingFive = ['Kyle Lowry', 'Fred VanVleet', 'OG Anunoby', 'Pascal Siakam',  'Marc Gasol'];
const map = function (arr, callback){
  const results = [];
  for(let item of arr){
    results.push(callback(item))
  }
  return results;
}

const results1 = map(startingFive, word => word[0]);
const results2 = map(startingFive, word => word += ' NBA Champion');
const results3 = map(startingFive, word => word.toUpperCase());


console.log(results1);
console.log(assertArraysEqual(results1, ['K', 'F', 'O', 'P', 'M']));
console.log(assertArraysEqual(results1, ['n', 'o', 'p', 'e']));
console.log(results2);
console.log(results3);
