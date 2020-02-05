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

const letterPositions = function(sentence) {
  const results = {};
  let position = 0;
  for (let letter of sentence) {
    if (letter !== ' ') {
      results[letter] ? results[letter].push(position) : results[letter] = [position];
      position++;
    }
  }
  return results;
};

console.log(assertArraysEqual(letterPositions('hello').e, [1]));