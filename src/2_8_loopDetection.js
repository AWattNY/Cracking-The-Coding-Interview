const loopDetection = (head) => {
  let slow = head;
  let fast = head;
    
  while ( slow !== null || fast !== null ) {
    slow = slow.next;
    fast = fast.next.next;
    if ( Object.is(slow, fast) ) {
      break; 
    }
  }
  if ( slow === null || fast === null ) {
    return null;
  }
  slow = head;
  while ( !Object.is(slow, fast) ) {
    slow = slow.next;
    fast = fast.next;
    
  }
  console.log(slow);
  return slow;
};

module.exports = loopDetection;