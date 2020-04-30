// ARRAY ASSERTION FUNCTION
const eqArrays = function(numArray1, numArray2) {
  let arrEqual;
  for (let i = 0; i < numArray1.length; i++) {
    // console.log("current numbers:", numArray1[i], numArray2[i]);
    if (numArray1[i] === numArray2[i]) {
      arrEqual = true;
    } else {
      return arrEqual = false;
    }
  }
  return arrEqual;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else { 
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false
