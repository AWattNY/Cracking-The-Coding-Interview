//delete middle 
//implement an algo to delete a node in the middle (any node but the first and last node)
//of a singly linked list given only access to that node 

// A -> B -> C -> D -> E -> F



const deleteNode = ( node ) => {
  if ( node === null || node.next === null ) {
    return false;
  }

  const nextNode = node.next;
  const nextNextNode = nextNode.next;
  node.value = nextNode.value;
  node.next = nextNextNode;
  return true;
};

module.exports = deleteNode;