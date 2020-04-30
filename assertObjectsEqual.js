// ASSERTION TEST FUNCTION
// checks for array equality
const eqArrays = function(numArray1, numArray2) {
  let arrEqual;
  for (let i = 0; i < numArray1.length; i++) {
    if (numArray1[i] === numArray2[i]) {
      arrEqual = true;
    } else {
      return arrEqual = false;
    }
  }
  return arrEqual;
};

// checks for object equality
const eqObjects = function(object1, object2) {

  //check if same number of keys
  if (Object.keys(object1).length !==  Object.keys(object2).length) {
    return false;
  }

  // check if same values for keys
  for (const key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (object1[key].length !== object2[key].length) {
        return false;
      } else {
        eqArrays(object1[key], object2[key]);
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};


// ---ASSERT OBJECTS EQUAL FUNCTION IMPLEMENTATION---
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};


assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });