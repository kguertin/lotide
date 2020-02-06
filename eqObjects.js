const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`\u{1F525} Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`\u{1F5D1} Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
        } else if (obj1[key1] !== obj2[key2]) {
          return false;
        }
      }
    }
  }
  return true;
};

const ab = {a: 1, b: 2};
const ba = {b: 2, a: 1};
assertEqual(eqObjects(ab, ba), true);


const abc = {a: 1, b: 2, c: 3};
assertEqual(eqObjects(ab, abc), false);


 const cd = { c: "1", d: ["2", 3] }; 
 const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); 