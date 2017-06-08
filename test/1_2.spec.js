import checkPermutation from '../src/1_2_checkPermutation';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-2 check permutation', function() {
  
  it('should return false for strings with different lengths', function() {
    expect(checkPermutation('abcd', 'bacd')).to.equal(true);
  });

  it('should return true if string2 is a permutation of string1', function() {
    expect(checkPermutation('abcd', 'bacd')).to.equal(true);
  });
  
  it('should return false if string2 is not a permutation of string1', function() {
    expect(checkPermutation('abcd', 'azcd')).to.equal(false);
  });

});