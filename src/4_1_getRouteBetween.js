import Queue from './queueHelperFunctions';

// in this implementation n1 and n2 are the keys and graph._nodes[n1] is the actual referebnce to the node
const getRouteBetween = ( graph, n1, n2 ) => {
  let visited = {};	
  if ( n1 === n2 ) {
    return true;
  }		
  let Q = new Queue();
  Q.enqueue(n1);
  while ( Q.size() !== 0 ) {
    let nodeName = Q.dequeue();
    visited[nodeName] = true;
    let currentNode = graph._nodes[nodeName];
    if ( currentNode.edges[n2] ) {
      return true;
    }
    for ( var node in currentNode.edges ) {
      if ( !visited[node] ) {	
        Q.enqueue(node);
      }
    }
  } 
  return false; 
};


module.exports = getRouteBetween;