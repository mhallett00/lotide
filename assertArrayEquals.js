const assertArrayEqual = function(numArray1, numArray2) {
  let arrEqual;
  for (let i = 0; i < numArray1.length; i++) {
    // console.log("current numbers:", numArray1[i], numArray2[i]);
    if (numArray1[i] === numArray2[i]) {
      arrEqual = true;
    } else {
      console.log(`❌️❌️❌️Assertion Failed: ${numArray1} !== ${numArray2}`);
      return;
    }
  }
  console.log(`✔️ ✔️ ✔️ Assertion Passed: ${numArray1} === ${numArray2}`)
};

assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false
