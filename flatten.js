// ARRAY ASSERTION FUNCTION
const eqArrays = function(input1, input2) {
  for (let i = 0; i <= input1.length; i++) {
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

// function to check for nested arrays in the input and place the elements into the parent array.
const flatten = function(inputArray) {
  let flattenedArray = [];
  for (let i = 0; i < inputArray.length; i++) {
    if (Array.isArray(inputArray[i])) {
      for (let j = 0; j < inputArray[i].length; j++) {
        flattenedArray.push(inputArray[i][j]);
      }
    } else {
      flattenedArray.push(inputArray[i]);
    }
  }
  return flattenedArray;
};

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);