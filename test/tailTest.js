const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  const result = tail(["Hello", "Lighthouse", "Labs"]);
  
  it("returns an array of the right size", () => {
    assert.strictEqual(result.length, 2);
  });

  it('returns ["Lighthouse", "Labs"] from ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

  it('returns input array intact', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });

  it('returns empty tail for single element arrays', () => {
    assert.strictEqual(tail(['Hello']).length, 0);
  });

  it('returns and empty array from an empty array', () => {
    assert.strictEqual(tail([]).length, 0);
  });

});