// ARRAY ASSERTION FUNCTION
const assertArrayEqual = function(numArray1, numArray2) {
  for (let i = 0; i < numArray1.length; i++) {
    if (numArray1[i] !== numArray2[i]) {
      console.log(`❌️❌️❌️Assertion Failed: ${numArray1} !== ${numArray2}`);
      return;
    }
  }
  console.log(`✔️ ✔️ ✔️ Assertion Passed: ${numArray1} === ${numArray2}`);
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
assertArrayEqual(words, ["hello", "world", "lighthouse"]);