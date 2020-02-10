const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`\u{1F5D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback){
  let objKeys = Object.keys(obj);
  for (let num of objKeys){
    if (callback(obj[num])){
      return num;
    }
  }
};


console.log(
findKey({
  'Blue Hill': {stars: 1},
  'Akaleri': {stars: 3},
  'noma': {stars: 2},
  'elBull': {stars: 3},
  'Ora': {stars: 2},
  'Akelarre': {stars: 3}
}, x => x.stars === 2));

const startingFive = {
  PG: 'Kyle Lowry',
  SG: 'Fred VanVleet',
  SF: 'OG Anunoby',
  PF: 'Pascal Siakam',
  C: 'Marc Gasol'
}

module.exports = findKey;

console.log(findKey(startingFive, x => x === 'Fred VanVleet'))
assertEqual(findKey(startingFive, x => x === 'Kyle Lowry'), 'PG');
