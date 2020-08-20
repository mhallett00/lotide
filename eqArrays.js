const eqArrays = function (input1, input2) {
  if (input1.length === input2.length) {
    for (let i = 0; i <= input1.length; i++) {
      if (input1[i] !== input2[i]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqArrays;
