//Actual FUnction 
const middle = function(arr) {
  let output = []
  let middle = Math.round((arr.length - 1) / 2);

  if (arr.length < 3){
    return output;
  }

  if (arr.length % 2 !== 0){
    output.push(arr[middle]);
  } else if (arr.length % 2 === 0) {
    output.push(arr[middle - 1], arr[middle]);
  }

  return output;
}

module.exports = middle;
