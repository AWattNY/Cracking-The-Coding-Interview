import ispermutationOfPalindrome from '../src/1_4_palindromePermutation';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-4 palindromePermutation', function() {
  
  it('should return true if string is a permutation of a palindrome', function() {
    expect(ispermutationOfPalindrome('carrace')).to.equal(true);
  });

  it('should return false if string is not a permutation of a palindrome', function() {
    expect(ispermutationOfPalindrome('abcd')).to.equal(false);
  });
  
});