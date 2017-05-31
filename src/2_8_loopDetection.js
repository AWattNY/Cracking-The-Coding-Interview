const loopDetection = (head) => {
  let slow = head;
  let fast = head;
  var collisionNode;
    
  while ( fast !== null || fast.next !== null ) {
    slow = slow.next;
    fast = fast.next.next;
    if ( slow.value === fast.value ) {
      collisionNode = slow;
      break; 
    }
  }

  slow = head;
  fast = collisionNode;
  while ( slow.value !== fast.value ) {
    slow = slow.next;
    fast = fast.next;
    
  }
  return slow;
};

module.exports = loopDetection;