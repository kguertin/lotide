const eqArrays = function(arr1, arr2){
  if(arr1.length === arr2.length){
    for(let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
}

const eqObjects = function(obj1, obj2){

  let object1 = Object.keys(obj1);
  let object2 = Object.keys(obj2);

  if (object1.length !== object2.length){
    return false
  }

  for (let key1 of object1) {
    for (let key2 of object2) {
      if (key1 === key2){
        if (Array.isArray(obj1[key1])){
          if(!(eqArrays(obj1[key1], obj2[key2]))){
            return false
          }
        }
        
        if (obj1[key1] !== obj2[key2]) {
          return false;
        }
      }
    }
  }
  return true;
};

// Actual Function
const assertObjectsEqual = function(actual, expected){
  const inspect = require('util').inspect;

  let result = eqObjects(actual, expected);

  if (result){
    console.log(`\u{1F525} Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else if (!result) {
    console.log(`\u{1F5D1} Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

module.exports = assertObjectsEqual;

assertObjectsEqual({a: 1, b:2, c:3}, {a: 1, b:2, c: 3});
assertObjectsEqual({a: 1, b:2, c:3}, {a: 1, b:2, c: 4});

