const getNodeDepth = (node) => {
  if ( node === null ) {
    return 0;
  } 
  return 1 + getNodeDepth(node.parent); 
};

const moveUpNode = (node, levels) => {
  if ( node === null ) {
    return null;
  }
  while ( levels > 0 ) {
    node = node.parent;
    levels--;
  }
  return node;
};

const firstCommonAncestor = (node1, node2) => {
  if ( node1 === null || node2 === null ) {
    return null;
  }
  const diff = getNodeDepth(node1) - getNodeDepth(node2);
  let lowerNode = ( diff > 0 ) ? node1 : node2;
  let higherNode = ( diff > 0) ? node2 : node1;
  lowerNode = moveUpNode(lowerNode, Math.abs(diff));
  while ( !Object.is(lowerNode, higherNode)) {
    lowerNode = lowerNode.parent;
    higherNode = higherNode.parent;
  }
  return lowerNode;
};

module.exports = firstCommonAncestor;