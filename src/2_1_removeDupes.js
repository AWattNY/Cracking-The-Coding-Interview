const removeDupes = (node ) => {
  let map = new Map();
  map.set(node.value, node.value);
  while ( node && node.next) {
    const nextNode = node.next;

    if ( map.has(nextNode.value) ) {
      node.next = nextNode.next; 
    } else {
      map.set(node.value, node.value);
    }
    node = node.next;
  }
};

module.exports = removeDupes;