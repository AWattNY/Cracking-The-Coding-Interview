import isOneAway from '../src/1_5_oneAway';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-5 One Away', function() {
  
  it('should return false if strings are 2 or more edits away 1', function() {
    expect(isOneAway('pale', 'palebb')).to.equal(false);
  });

  it('should return false if strings are 2 or more edits away 2', function() {
    expect(isOneAway('pale', 'bae')).to.equal(false);
  });

  it('should return true if strings are 0 or 1 edit away', function() {
    expect(isOneAway('pale', 'ple')).to.equal(true);
  });
  
  it('should return true if strings are 0 or 1 edit away', function() {
    expect(isOneAway('pales', 'pale')).to.equal(true);
  });

  it('should return true if strings are 0 or 1 edit away', function() {
    expect(isOneAway('pale', 'bale')).to.equal(true);
  });

});