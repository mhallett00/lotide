assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLMENTATION - To remove elements from source that match itemsToRemove. Returns a new string.
const without = function (source, itemsToRemove) {
  let arrEqual = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) < 0) {
      arrEqual.push(source[i]);
    }
  }
  return arrEqual;
};


// Checking functionality of function implementation.
console.log(without([1, 2, 3], [1])); // logs [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // logs ["1", "2"]

// PASS - If original array is unmodified.
const words = ["hello", "world", "lighthouse"];
without(words, ["Lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
