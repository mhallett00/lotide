// ARRAY ASSERTION FUNCTION
const eqArrays = function(input1, input2) {
  for (let i = 0; i < input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLMENTATION - To remove elements from source that match itemsToRemove. Returns a new string.
const without = function(source, itemsToRemove) {
  let arrEqual = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] !== itemsToRemove[i]) {
      arrEqual.push(source[i]);
    }
  }
  return arrEqual;
};

// Checking functionality of function implementation.
console.log(without([1, 2, 3], [1]));  // logs [2, 3]
console.log(without(["1","2","3"], [1, 2, "3"])); // logs ["1", "2"]

// PASS - If original array is unmodified.
const words = ["hello", "world", "lighthouse"];
without(words, ["Lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);