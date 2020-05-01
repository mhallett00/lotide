// ASSERTION TEST
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(input1, input2) {
  for (let i = 0; i <= input1.length; i++) {
    if (input1[i] !== input2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false); // => should PASS