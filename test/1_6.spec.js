import compressString from '../src/1_6_stringCompression';
import { expect } from 'chai';

describe('Ctci - arrays and strings 1-6 String Compression', function() {
  
  it('should retrun an emty string for an empty string', function() {
    expect(compressString('')).to.equal('');
  });

  it('should retrun a10 for aaaaaaaaaa', function() {
    expect(compressString('aaaaaaaaaa')).to.equal('a10');
  });

  it('should retrun a5b5 for aaaaabbbbb', function() {
    expect(compressString('aaaaabbbbb')).to.equal('a5b5');
  });
  
  it('should work for very long strings ', function() {
    var string = ['a', 'b', 'c', 'd', 'e'].map( (char, index) => {
      var longString = '';
      for (var i = 0; i < index * 25 + 25; i++ ) {
        longString += char;
      }
      return longString;
    }).join('');
    expect(compressString(string)).to.equal('a25b50c75d100e125');
  });

  it('should retrun string if compressed version not shorter', function() {
    expect(compressString('abcdefg')).to.equal('abcdefg');
  });

});