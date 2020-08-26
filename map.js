const assertArraysEqual = require("./assertArraysEqual");

// FUNCTION IMPLEMENTATION
const map = function (words, func) {
  const results = [];
  for (let item of words) {
    results.push(func(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const words2 = [];

const results1 = map(words, (word) => word[0]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, (word) => word.length);
assertArraysEqual(results2, [6, 7, 2, 5, 3]);

const results3 = map(words2, []);
assertArraysEqual(results3, ["hi"]); // should fail
