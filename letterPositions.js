// ARRAY ASSERTION FUNCTION
const assertArrayEqual = function(numArray1, numArray2) {
  for (let i = 0; i < numArray1.length; i++) {
    if (numArray1[i] !== numArray2[i]) {
      console.log(`❌️❌️❌️Assertion Failed: ${numArray1} !== ${numArray2}`);
      return;
    }
  }
  console.log(`✔️ ✔️ ✔️ Assertion Passed: ${numArray1} === ${numArray2}`);
};


// FUNCTION IMPLEMENTATION
const letterPositions = function(sentence) {
  let results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};

// TEST CODE

assertArrayEqual(letterPositions('hello').h, [0]);
assertArrayEqual(letterPositions('hello').e, [1]);
assertArrayEqual(letterPositions('hello').l, [2, 3]);
assertArrayEqual(letterPositions('hello').o, [4]);

console.log(letterPositions('hello'));
