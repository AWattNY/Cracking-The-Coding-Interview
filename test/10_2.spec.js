import {
  wordFrequencies,
  getWordFrequency  
} from '../src/10_2_WordFrequencies';
import { expect } from 'chai';


describe('Ctci - Sorting and Searching 10-2 Word Frequencies', function() {
  var book = 'In ReactiveX an observer subscribes to an Observable Then that observer reacts to whatever item or sequence of items the Observable emits This pattern facilitates concurrent operations because it does not need to block while waiting for the Observable to emit objects but instead it creates a sentry in the form of an observer that stands ready to react appropriately at whatever future time the Observable does so'.split(' ');
  var wordCount = wordFrequencies(book);
   
  it('should return 1 as count for the word "then" ', function() {
    expect(getWordFrequency(wordCount, 'then')).to.equal(1);
    
  });

  it('should return 4 as count for the word "observable" ', function() {
    expect(getWordFrequency(wordCount, 'observable')).to.equal(4);
    
  });

  it('should be case insensitive - oBsErVabLe ', function() {
    expect(getWordFrequency(wordCount, 'observable')).to.equal(4);
    
  });

  it('should return 0 for a word not in the book ', function() {
    expect(getWordFrequency(wordCount, 'xyzhfth')).to.equal(0);
    
  });  
  
});