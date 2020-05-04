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

module.exports = middle;
