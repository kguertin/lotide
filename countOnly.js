
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`\u{1F5D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount){
  const results = {};
  for(const item of allItems) {
    if (itemsToCount[item]){
    results[item] ? results[item] +=1 : results[item] = 1;
    }
  }
  return results
}

const firstNames = [
  'Karl',
  'Salima',
  'Agouhanna',
  'Fang',
  'Kavith',
  'Jason',
  'Salima',
  'Fang',
  'Joe'
];

module.exports = countOnly;

console.log(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true}));

const result1 = countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true});

assertEqual(result1['Jason'], 1);
assertEqual(result1['Karima'], undefined);
assertEqual(result1['Fang'], 2);
