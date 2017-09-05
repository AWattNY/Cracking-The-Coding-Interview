const isMatch = (string, pattern) => {
  let hashMap = {};
  const check = ( str, pat) => {
    if ( str === '' && pat === '' ) {
      return true;
    }
    if ( str === '' || pat === '' ) {
      return false;
    }
    const currentPattern = pat[0];
    if ( !hashMap[currentPattern] ) {
      
      for ( var i = 1; i <= str.length; i++ ) {

        let currentStr = str.slice(0, i);
        if (Object.values(hashMap).indexOf(currentStr) === -1 ) {
          hashMap[currentPattern] = currentStr;
          if ( check(str.slice(i), pat.slice(1) ) ) {
            return true;
          }
          delete hashMap[currentPattern];
        }
      }
           
    } else {
      const value = hashMap[currentPattern];
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