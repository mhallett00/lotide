//ASSERTION TEST FUNCTION
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


// FUNCTION IMPLMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false