const BST = function(value) {
  this.value = value;
  this.right = null;
  this.left = null;
};

const minimalTree = (array, min, max) => {
  if ( max < min )	{
    return null;
  }
  const l = array.length;
  const mid = Math.floor((min + max) / 2);
  const node = new BST(array[mid]);
  node.left = minimalTree(array, min, mid - 1);
  node.right = minimalTree(array, mid + 1, max);
  return node;
};

module.exports = minimalTree;