const words = ["ground", "control", "to", "major", "tom"];

const map = function(words, func) {
  const results = [];
  for (let item of words) {
    results.push(func(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);