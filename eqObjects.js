// const assertEqual = require("./assertEqual");
const eqArrays = require("./eqArrays");

// FUNCTION IMPLMENTATION
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  // check if same number of keys
  if (Object.keys(object1).length === Object.keys(object2).length) {
    // check key values are equal
    for (const key in object1) {
      // when value is an array
      if (Array.isArray(object1[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
        // when value is not an array
      } else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;

// TEST CODE

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false

// const dd = { a: [1, 2], b: [3, 4] };
// const cc = { a: [1, 2], b: [3, 4] };
// assertEqual(eqObjects(dd, cc), true); // => true

// const ccc = { a: [1, 2], b: [3, 5] };
// assertEqual(eqObjects(dd, ccc), false); // => false

// const ddd = { a: [1, 2], b: 3 };
// assertEqual(eqObjects(dd, ddd), false); // => false

// const dddd = { a: [1, 2], b: 3 };
// assertEqual(eqObjects(dd, dddd), false); // => false
