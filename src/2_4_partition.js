// Partition: Write code to partition a linked list around a value x, such that all nodes less than x 
// come before all nodes greater than or equal to x. if x is contained within the list, 
// the values of x only need to be after the elements less than x. the partition element x can appear anywhere in the 
// "right partition"; it does not need to appear between the left and right partitions

// example
// input 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// output 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8

// start at head
// 
import LinkedList from './linkedListHelperFunctions';

var partition = function ( node, n ) {
  let R = new LinkList();
  R.head = node;
  R.tail = node;

  while ( node !== null ) {
    const nextNode = node.next;
    if ( node.value < n ) {
      node.next = R.head;
      R.head = node;
    } else {
      R.tail.next = node;
      R.tail = node;
    }
    node = nextNode;
  } 
  R.tail.next = null;
  return R.Head;
}; 


module.exports = partition;