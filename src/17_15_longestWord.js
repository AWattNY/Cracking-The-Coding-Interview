const longestWord = ( array ) => {
  let hashMap = new Map();
  const checkString = (string) => {
    if ( hashMap.has(string) ) {
      return true;
    }
    for ( var i = 1; i <= string.length; i++ ) {
      let current = string.slice(0, i);
      if ( hashMap.has(current) && checkString(string.slice(i)) ) {
        return true;
      } 
    }
    return false;
  };

  const l = array.length;
  array.sort((a, b) => a.length - b.length);
  array.forEach(str => {
    if ( !hashMap.has(str) ) {
      hashMap.set(str, true);
    }
  });
  for ( var i = l - 1; i >= 0; i-- ) {
    hashMap.delete(array[i]);
    if ( checkString(array[i]) ) {
      return array[i];
    }
  }
  return null;

};

module.exports = longestWord;