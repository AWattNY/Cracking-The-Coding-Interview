const isUnique = (string) => {
  let characters = {};
  for ( var i = 0; i < string.length; i++) {
    if ( characters[string.charAt(i)]) {
      return false;
    } 
    characters[string.charAt(i)] = true;
  }
  return true;
}; 

module.exports = isUnique;