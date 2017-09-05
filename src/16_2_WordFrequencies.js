const wordFrequencies = (book) => {
  let wordCount = new Map();
  book.forEach(word => {
    word = word.toLowerCase();
    if ( !wordCount.has(word) ) {
      wordCount.set(word, 1);
    } else {
      let newCount = wordCount.get(word) + 1;
      wordCount.set(word, newCount);
    }
  });
  return wordCount;
};

const getWordFrequency = (wordCount, word) => {
  if ( wordCount === null || word === null ) {
    return null;
  }
  let count = 0;
  word = word.toLowerCase();
  if ( wordCount.has(word) ) {
    count = wordCount.get(word);
  }
  return count;
};

module.exports = {
  wordFrequencies,
  getWordFrequency	
};