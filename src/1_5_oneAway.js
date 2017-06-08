const isOneAway = (string1, string2) => {
  if (string2.length > string1.length + 1) {
    return false;
  }
  let charCount = {};
  let charCount2 = {};
  let editsAway = 0;
  
  for ( var i = 0; i < string1.length; i++) {
    var currentChar = string1.charAt(i);
    if (!charCount[currentChar]) {
      charCount[currentChar] = 1;
    } else {
      charCount[currentChar]++;
    } 
  }

  for ( var i = 0; i < string2.length; i++) {
    var currentChar = string2.charAt(i);
    if (!charCount[currentChar]) {
      editsAway++;
      if ( editsAway > 1 ) {
        return false;
      }
    } else {
      charCount[currentChar]--;
      if (charCount[currentChar] < -1) {
        return false;
      }
    }
    if (!charCount2[currentChar]) {
      charCount2[currentChar] = 1;
    } else {
      charCount2[currentChar]++;
    } 
  }

  for ( var i = 0; i < string1.length; i++) {
    var currentChar = string1.charAt(i);
    // if (!charCount2[currentChar] && editsAway === 1) {
    //   editsAway++;
    //   if ( editsAway > 1 ) {
    //     return false;
    //   }
    // } 
  }  
  return true;  
};

module.exports = isOneAway;