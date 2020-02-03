const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`\u{1F5D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test Code
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1,1);
assertEqual(1,2);
assertEqual('Marc Gasol','Marc Gasol');
