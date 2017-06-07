// A binary search tree (BST) is a node based binary tree data structure which has the following properties.
 // • The left subtree of a node contains only nodes with keys less than the node’s key.
//  • The right subtree of a node contains only nodes with keys greater than the node’s key.
//  • Both the left and right subtrees must also be binary search trees.

const validateBST = (node, min, max) => {
  if ( node === null ) {
    return true;
  }
  if ( ( min !== null && node.value <= min ) || (max !== null && node.value > max )) {
    return false;
  }
  if (!validateBST(node.left, min, node.value) || !validateBST(node.right, node.value, max)) {
    return false;
  }
  return true;
};

module.exports = validateBST;