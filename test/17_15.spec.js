import longestWord from '../src/17_15_longestWord';
import { expect } from 'chai';

describe('Ctci - Hard Problems 17-15 Longest Words', function() {

  it('should return longest word made of other words in list - example 1', function() {
    var list = ['s', 'cat', 'banana', 'dog', 'nana', 'walk', 'walker', 'dogwalkers'];
    expect(longestWord(list)).to.equal('dogwalkers');
  });

  it('should return longest word made of other words in list - example 2 ', function() {
    var list = ['er', 'cat', 'banana', 'dog', 'nana', 'walk', 'walker', 'dogwalker', 'dogwalkers'];
    expect(longestWord(list)).to.equal('dogwalker');
  });

  it('should return longest word made of other words in list - example 3 ', function() {
    var list = ['ba', 'cat', 'banana', 'dogs', 'nana', 'walk', 'walker', 'dogwalker', 'dogwalkers'];
    expect(longestWord(list)).to.equal('banana');
  });

  it('should return null if no word can be made of other words in list  ', function() {
    var list = ['er', 'cat', 'banana', 'dog', 'nana', 'walk', 'walker', 'dogwalker', 'dogwalkers'];
    expect(longestWord(list)).to.equal(null);
  });

});