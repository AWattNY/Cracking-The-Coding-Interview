// General Methodology for Tech Interview Summary
// STEP 1: Question
// STEP 2: Test Case
// STEP 3: Algo in English
// STEP 4: Speed & Space
// STEP 5: Code
// STEP 6: Proof(OPT)
// Return kth to Last: implement an algorithm to find the kth to last element of a singly linked list
const kthToLast = ( head, k) => {
  let first = head;
  let second = head;
  let currentPos = 1;
  while ( second.next !== null ) {
    if ( currentPos < k ) {
      second = second.next;
    } else {
      first = first.next;
      second = second.next;
    }
    currentPos++;
  }
  return first;
};

module.exports = kthToLast;