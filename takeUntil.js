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


// FUNCTION IMPLEMENTATION
const takeUntil = function(data, func) {
  const results = [];
  for (let item of data) {
    if (func(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
  return results;
};


// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

console.log('---');

const data3 = [];
const results3 = takeUntil(data3, x => x === ',');
console.log(results3);

console.log('---');

const data4 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results4 = takeUntil(data4, x => x === ',');
console.log(results4);

console.log('---');

assertArraysEqual(results1, [1, 2, 5, 7, 2]); // should pass
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]); //should pass
assertArraysEqual(results3, []); // should pass
assertArraysEqual(results4, ["I've"]); // should fail
