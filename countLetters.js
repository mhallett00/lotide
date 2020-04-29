// ASSERTION TEST FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️ ✔️ ✔️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌️❌️❌️Assertion Failed: ${actual} !== ${expected}`);
  }
};


// FUNCTION IMPLEMENTATION
const countLetters = function(sentenceStr) {
  let results = {};
  const sentence = sentenceStr.replace(/\s/g, "");
  for (const letter of sentence) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }

  return results;
};

const result1 = countLetters('Hello there!');

assertEqual(result1['H'], 1);
assertEqual(result1['l'], 2);
assertEqual(result1['e'], 3);

console.log(result1);