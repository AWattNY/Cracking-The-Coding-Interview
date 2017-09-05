const isMatch = (string, pattern) => {
  let hashMap = new Map();
  const check = ( str, pat) => {
    if ( str === '' && pat === '' ) {
      return true;
    }
    if ( str === '' || pat === '' ) {
      return false;
    }
    const currentPattern = pat[0];
    if ( !hashMap.has(currentPattern) ) {
      for ( var i = 1; i <= str.length; i++ ) {
        let currentStr = str.slice(0, i);
        hashMap.set(currentPattern, currentStr);
        if ( check(str.slice(i), pat.slice(1) ) ) {
          return true;
        }
        hashMap.delete(currentPattern);
      }    
    } else {
      const value = hashMap.get(currentPattern);
      const l = value.length;
      if ( str.startsWith(value) ) {
        if ( check(str.slice(l), pat.slice(1)) ) {
          return true;
        }  
      } 
    }
    return false;
  };
  return check(string, pattern);
};

module.exports = isMatch;