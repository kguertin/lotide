
// Actual Function
const flatten = function(arr){
  let newArr = [];
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])) {
      newArr.push(arr[i]);
    } else {
      for (let j = 0; j < arr[i].length; j++){
        if (!Array.isArray(arr[i][j])){
          newArr.push(arr[i][j])
        }
      }
    }
  }
  return newArr
}

module.exports = flatten;

console.log(flatten([1,2,3,[4,5],6]));
console.log(flatten([1,[2,3],[4,5],[6,7]]))