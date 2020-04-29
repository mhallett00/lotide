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


const middle = function(array) {
  const middleIndex = Math.floor(array.length / 2);
  const outputArray = [];
  if (array.length < 3) {
    return outputArray;
  } else if (array.length % 2 === 0) {
    return array.slice(middleIndex - 1 , middleIndex + 1);
  }
  return array.slice(middleIndex, middleIndex + 1);
  
};

assertArrayEqual(middle([1, 2, 3, 4, 5]),[3]);
assertArrayEqual(middle([1]),[]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]),[3, 4]);
