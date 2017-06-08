const checkPermutation = (string1, string2) => {
  let charCount = {};
  for ( var i = 0; i < string1.length; i++ ) {
    let currentChar = string1.charAt(i);
    if ( charCount[currentChar] ) {
      charCount[currentChar]++;
    } else {
      charCount[currentChar] = 1;
    }
  }

  for ( var i = 0; i < string2.length; i++ ) {
    let currentChar = string2.charAt(i);
    if (!charCount[currentChar]) {
      return false;
    } else {
      charCount[currentChar]--;
      if ( charCount[currentChar] < 0 ) {
        return false;
      }
    }
  }
  return true;
};

module.exports = checkPermutation;