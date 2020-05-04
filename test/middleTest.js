const assert = require('chai').assert;
const middle = require('../middle');


describe('#middle', () => {
  it('returns middle index value in an odd numbered array, 3 from [1, 2, 3, 4, 5]', () =>{
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });

  it('returns two middle index value in an even numbered array, [3, 4] from [1, 2, 3, 4, 5, 6]', () =>{
    assert.deepEqual(middle([1, 2, 3, 4, 5]),[3]);
  });

  it('returns empty array if 2 or less input elements', () =>{
    assert.deepEqual(middle([1, 2]),[]);
  });

});
