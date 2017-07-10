const getCountFromNode = (node, targetSum, currentSum) => {
  if ( !node ) {
    return 0;
  }
  let count = 0;
  currentSum += node.value;
  if ( currentSum === targetSum ) {
    count++;
  }
  count += getCountFromNode( node.left, targetSum, currentSum);
  count += getCountFromNode( node.right, targetSum, currentSum);
  return count;
};

const countPaths = (node, targetSum) => {
  if ( !node ) {
    return 0;
  }
  let pathCount = getCountFromNode(node, targetSum, 0);
  pathCount += countPaths(node.left, targetSum);
  pathCount += countPaths(node.right, targetSum);
  
  return pathCount;
  
};

module.exports = {
  countPaths,
  getCountFromNode
};  