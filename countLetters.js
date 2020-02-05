const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`\u{1F5D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let uniformSentence = sentence.toLowerCase();
  let result = {};

  for (let letter of uniformSentence) {
    if (letter !== ' ') {
      result[letter] ? result[letter] += 1 : result[letter] = 1;
    }
  }
  return result;
};

console.log(countLetters('Toronto Raptors NBA Champions'));
