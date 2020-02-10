const assertEqual = require('./assertEqual');


const head = function(array) {
  let firstElem = array[0];

  if (array.length < 1) {
    return undefined;
  }

  return firstElem;
};

module.exports = head