import isMatch from '../src/16_18_PatternMatching';
import { expect } from 'chai';


describe('Ctci - Moderate 16-18 Pattern Matching', function() {
  
  it('should return true if string matches pattern - example 1 ', function() {
    expect(isMatch('catcatgocatgo', 'a')).to.equal(true);
    
  });

  it('should return false if string does not matche pattern - example 1 ', function() {
    expect(isMatch('catcatgocatgo', 'aaaaa')).to.equal(false);
    
  });

  it('should return true if string matches pattern - example 2 ', function() {
    expect(isMatch('catcatgocatgo', 'aabab')).to.equal(true);
    
  });

  it('should return false if string does not matche pattern - example 2 ', function() {
    expect(isMatch('catcatgocatgo', 'abbabcd')).to.equal(false);
    
  });

  it('should return true if string matches pattern - example 3 ', function() {
    expect(isMatch('blueredbluered', 'abab')).to.equal(true);
    
  });

  it('should return false if string does not matche pattern - example 3 ', function() {
    expect(isMatch('blueredbluered', 'abbb')).to.equal(false);
    
  });

  it('should return true if string matches pattern - example 4 ', function() {
    expect(isMatch('blueblueredred', 'aabb')).to.equal(true);
    
  });

  it('should return false if string does not matche pattern - example 4 ', function() {
    expect(isMatch('blueblueredred', 'aacbb')).to.equal(false);
    
  });

  it('should return true if string matches pattern - example 5 ', function() {
    expect(isMatch('catcatgohorsecatcat', 'aabcaa')).to.equal(true);
    
  });

  it('should return false if string does not matche pattern - example 5 ', function() {
    expect(isMatch('catcatgohorsecatcat', 'addcda')).to.equal(false);
    
  });

  it('should return true if string matches pattern - example 6 ', function() {
    expect(isMatch('catdoghorsecat', 'abca')).to.equal(true);
    
  }); 

  it('should return false if string does not matche pattern - example 6 ', function() {
    expect(isMatch('catdoghorsecat', 'abcbca')).to.equal(false);
    
  });

  it('should return false  ', function() {
    expect(isMatch('rr', 'ab')).to.equal(false);
    
  }); 
  
});



