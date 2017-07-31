const checkOneReplacemenetAway = (string1, string2) => {
  let index = 0;
  let oneDifferent = false;
  while ( index < string1.length ) {
    if ( string1.charAt(index) !== string2.charAt(index) ) {
      if ( oneDifferent ) {
        return false;
      }
      oneDifferent = true;
    } 
    index++;
  }
  return true;
};

const checkOneInsertAway = (string1, string2) => {
  const n = string1.length;
  const m = string2.length;
  let index1 = 0;
  let index2 = 0;
  while ( index1 < n && index2 < m ) {
    if ( string1.charAt(index1) !== string2.charAt(index2) ) {
      if ( index1 !== index2 ) {
        return false;
      }
      index2++;
    } else {
      index1++;
      index2++;
    }
  }
  return true;
};

const isOneAway = (string1, string2) => {
  const n = string1.length;
  const m = string2.length;
  if ( n === m ) {
    return checkOneReplacemenetAway(string1, string2);
  } else if ( n + 1 === m) {
    return checkOneInsertAway(string1, string2);
  } else if ( n === m + 1 ) {
    return checkOneInsertAway(string2, string1);
  }
  return false;
};

module.exports = isOneAway;