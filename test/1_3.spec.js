import urlify from '../src/1_3_urlify';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-3 URLify', function() {
  
  it('should return URLified string  1', function() {
    expect(urlify('ab  cd')).to.equal('ab%20cd');
  });

  it('should return URLified string  2', function() {
    expect(urlify('ab cd ef')).to.equal('ab%20cd%20ef');
  });
  
  it('should ignore spaces at end of string', function() {
    expect(urlify('ab cd ef  ')).to.equal('ab%20cd%20ef');
  });

});