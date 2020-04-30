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


const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const outputArray = [];
  if (array.length < 3) {
    return outputArray;
  } else if (array.length % 2 === 0) {
    return array.slice(middleIndex - 1 , middleIndex + 1);
  }
  return array.slice(middleIndex, middleIndex + 1);
  
};

assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArraysEqual(middle([1]),[]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
