const eqObjects = require("./eqObjects");

// ---ASSERT OBJECTS EQUAL FUNCTION IMPLEMENTATION---
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(
      `✔️ ✔️ ✔️ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    );
  } else {
    console.log(
      `❌️❌️❌️Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
  }
};

module.exports = assertObjectsEqual;

//  TEST CODE

// assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" });
// assertObjectsEqual({ a: "1", b: "2" }, { a: "1", b: "2", c: "3" });
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { d: ["2", 3], c: "1" });
// assertObjectsEqual({ c: "1", d: ["2", 3] }, { c: "1", d: ["2", 3, 4] });
