const compressString = (string) => {
  let count = 1;
  let index = 1;
  let compressed = '';
  let currChar;
  let prevChar;

  while ( index < string.length ) {
    currChar = string.charAt(index);
    prevChar = string.charAt(index - 1);

    if ( currChar === prevChar ) {
      count++;
    } else {
      compressed += prevChar + count;
      count = 1;
    }
    index++;
  }
  compressed += prevChar + count;
  let result = ( compressed.length < string.length ) ? compressed : string;
  return result;
};

module.exports = compressString;