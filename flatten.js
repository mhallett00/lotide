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

assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]),[1, 2, 3, 4, 5, 6]);