// ASSERTION TEST
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 1, 3], [1, 2, 3]), false); // => should PASS