// For Test Cases
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`\u{1F5D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Actual Function
const findKeyByValue = (object, string) => {
  let key = '';
  let objectKeys = Object.keys(object);

  for (let value of objectKeys){
    if (object[value] === string){
      key = value;
    }
  }
 
  return key ? key : undefined;
}

const startingFive = {
  PG: 'Kyle Lowry',
  SG: 'Fred VanVleet',
  SF: 'OG Anunoby',
  PF: 'Pascal Siakam',
  C: 'Marc Gasol'
}

console.log(findKeyByValue(startingFive, 'OG Anunoby'));
assertEqual(findKeyByValue(startingFive, 'Marc Gasol'), 'C');
assertEqual(findKeyByValue(startingFive, 'Pascal Siakam'), 'C');
assertEqual(findKeyByValue(startingFive, 'Kemba Walker'), undefined);