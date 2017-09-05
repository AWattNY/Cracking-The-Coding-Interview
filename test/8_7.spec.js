import permWithoutDupes from '../src/8_7_permutationsWithoutDuplicates';
import { expect } from 'chai';
import _ from 'lodash';


describe('Ctci - Recursion and Dynamic Programming 8-7 permutations without Duplicates', function() {
  
  it('should return an empty array for an empty string input ', function() {
    expect(_.isEqual(permWithoutDupes(''), [''])).to.equal(true);
    
  });

  it('should return ["ab", "ba"] for "ab" ', function() {
    expect(_.isEqual(permWithoutDupes('ab'), ['ab', 'ba'])).to.equal(true);
    
  });


  it('should return ["abc", "acb", "bac", "bca", "cab", "cba"] for "abc" ', function() {
    expect(_.isEqual(permWithoutDupes('abc'), ['abc', 'acb', 'bac', 'bca', 'cab', 'cba'])).to.equal(true);
    
  });
  
});