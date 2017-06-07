import isUnique from '../src/1_1_isUnique';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-1 is Unique', function() {
  
  it('should return true if string has all unique characters', function() {
    expect(isUnique('abcd')).to.equal(true);
  });
  
  it('should return true for one character strings', function() {
    expect(isUnique('a')).to.equal(true);
  });


  it('should return false for strings with repeating characters', function() {
    expect(isUnique('aabcd')).to.equal(false);
    expect(isUnique('abcdd')).to.equal(false);
    expect(isUnique('abbcd')).to.equal(false);
  });

});