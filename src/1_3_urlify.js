const urlify = (string) => {
  const str = string.trim();
  let urlified = '';
  let previousIsSpace = false;
  for ( var i = 0; i < str.length; i++) {

    if ( str.charAt(i) === ' ' && !previousIsSpace) {
      urlified += '%20';
      previousIsSpace = true;
    } 
    if ( str.charAt(i) !== ' ' ) {
      urlified += string.charAt(i);
      previousIsSpace = false;
    }         
  }
  return urlified;
};

module.exports = urlify;