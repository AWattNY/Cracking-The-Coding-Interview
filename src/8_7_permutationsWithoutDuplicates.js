const permWithDupes = (string) => {
  let hashSet = new Set(string.split(''));
  let noDupesStr = [...hashSet].join('');
  let permutations = {};
  const getPerms = (perm, str) => {
    if ( str === '' ) {
      permutations[perm] = true;
      return;
    }
    for ( var i = 0; i < str.length; i++ ) {
      let char = str.charAt(i);
      getPerms(perm + char, str.slice(0, i) + str.slice(i + 1));
    }
  };
  getPerms('', noDupesStr);
  return Object.keys(permutations);
};

module.exports = permWithDupes;