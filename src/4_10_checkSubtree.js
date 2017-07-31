

const areSame = ( n1, n2 ) => {
  if ( n1 === null && n2 === null ) {
    return true;
  }
  if ( n1 === null || n2 === null ) {
    return false;
  }
  if ( n1.value === n2.value ) {
    return areSame(n1.left, n2.left) && areSame(n1.right, n2.right);
  }
  return false;
};

const isSubtree = (n1, n2) => {
  if ( n1 === null ) {
    return false; 
  }
  if ( n1.value === n2.value && areSame(n1, n2) ) {
    return true;
  }
  return isSubtree( n1.left, n2) || isSubtree( n1.right, n2);
};

module.exports = {
  areSame,
  isSubtree
};  