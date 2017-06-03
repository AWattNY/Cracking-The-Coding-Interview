import LinkedList from './linkedListHelperFunctions';

const reverseList = (node) => {
  let reverse = new LinkedList();
  
  while (node) {
    let newNode = reverse.makeNode(node.value);
    newNode.next = reverse.head;
    reverse.head = newNode;
    node = node.next;
  }

  return reverse;
};

const areEqual = (node1, node2) => {
  while ( node1 && node2 ) {
    if ( node1.value !== node2.value ) {
      return false;
    }
    node1 = node1.next;
    node2 = node2.next;
  }
  return node1 === null && node2 === null;  
};

const isPalindrome = (head) => {

  const reversedList = reverseList(head);

  return areEqual(head, reversedList.head);

};



module.exports = isPalindrome;