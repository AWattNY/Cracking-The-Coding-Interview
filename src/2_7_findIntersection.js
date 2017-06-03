const findIntersection = (node1, node2) => {
  let length1 = 0;
  let length2 = 0;
  let node = node1;
  let diff;
  let start1;
  let start2;
  while ( node ) {
    length1++;
    node = node.next;
  }
  node = node2;
  while ( node ) {
    length2++;
    node = node.next;
  }
  
  diff = length2 - length1;
  start1 = node1;
  start2 = node2;
  
    
  for ( var i = 0; i < Math.abs(diff); i++) {
    if ( diff > 0 ) {	
      start2 = start2.next;
    }
    if ( diff < 0 ) {	
      start1 = start1.next;
    }
    
  } 
    
  while ( !Object.is(start1, start2) ) {
    start1 = start1.next;
    start2 = start2.next;
  }
  return start1;
};

module.exports = findIntersection;