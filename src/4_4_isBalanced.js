const BST = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};
const checkTreeHeight = (node) => {
  if ( node === null ) {
    return -1;
  }
  const leftHeight = checkTreeHeight(node.left);

  if ( leftHeight === -Infinity ) {
    return -Infinity;
  }
  const rightHeight = checkTreeHeight(node.right);

  if ( rightHeight === -Infinity ) {
    return -Infinity;
  }
  let diff = leftHeight - rightHeight;

  if ( Math.abs(diff) > 1 ) {
    return -Infinity;
  } else {
    return Math.max(leftHeight, rightHeight) + 1;  
  }

};

const isBalanced = (node) => {
  return checkTreeHeight(node) !== -Infinity;
};

module.exports = isBalanced;