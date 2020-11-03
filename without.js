// FUNCTION IMPLMENTATION - Removes elements from source array that match itemsToRemove. Returns a new array of leftover elements.
const without = function (source, itemsToRemove) {
  let arrEqual = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) < 0) {
      arrEqual.push(source[i]);
    }
  }
  return arrEqual;
};

module.exports = without;
