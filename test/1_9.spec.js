import isRotation from '../src/1_9_stringRotation';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-9 String Rotation', function() {
  
  it('should return true for two empty strings', function() {
    expect(isRotation('', '')).to.equal(true);
  });

  it('should return false for two strings with different lengths', function() {
    expect(isRotation('newyork', 'newyorkcity')).to.equal(false);
  });

  it('should return true if 2nd string is rotation of first string ', function() {
    expect(isRotation('newyork', 'yorknew')).to.equal(true);
  });

  it('should return true if 2nd string is rotation of first string ', function() {
    expect(isRotation('waterbottle', 'erbottlewat')).to.equal(true);
  });

});