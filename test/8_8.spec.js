import permWithDupes from '../src/8_8_permutationsWithDuplicates';
import { expect } from 'chai';
import _ from 'lodash';


describe('Ctci - Recursion and Dynamic Programming 8-8 permutations with Duplicates', function() {
  
  
  
  it('should return an empty array for an empty string input ', function() {
    expect(_.isEqual(permWithDupes(''), [''])).to.equal(true);
    
  });

  it('should return ["ab", "ba"] for "ab" ', function() {
    expect(_.isEqual(permWithDupes('ab'), ['ab', 'ba'])).to.equal(true);
    
  });


  it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for "abc" ', function() {
    expect(_.isEqual(permWithDupes('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])).to.equal(true);
    
  });
  
  it('should also return ["ab", "ba"] for "abbbbbbbb" ', function() {
    expect(_.isEqual(permWithDupes('ab'), ['ab', 'ba'])).to.equal(true);
    
  });


  it('should also return ["abc", "acb", "bac", "bca", "cab", "cba"] for "aaaabbbcccc" ', function() {
    expect(_.isEqual(permWithDupes('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])).to.equal(true);
    
  });

  
});