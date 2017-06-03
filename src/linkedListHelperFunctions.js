var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.addToTail = function(value) {
  const newNode = this.makeNode(value);
  if ( this.head === null ) {
    this.head = newNode;
  }
  if ( this.tail ) {
    this.tail.next = newNode;
  }
  this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
  if ( this.head === null ) {
    return null;
  }
  const previousHeadValue = this.head.value;
  if ( this.head.next === null ) {
    this.head = null;
    this.tail = null;
  } else {
    
    this.head = this.head.next;
  }
  return previousHeadValue;  
};

LinkedList.prototype.contains = function(target) {
  var currentNode = this.head;
  while ( currentNode ) {
    if ( currentNode.value === target ) {
      return true;
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.convertToNumber = function() {
  var currentNode = this.head;
  var result = 0;
  var index = 0;
  while ( currentNode ) {
    result += currentNode.value * Math.pow(10, index++); 
    currentNode = currentNode.next;
  }
  return result;
};

LinkedList.prototype.makeNode = function(value) {
  const Node = function(value) {
    this.value = value;
    this.next = null;
  };
  return new Node(value);
  
};

LinkedList.prototype.print = function(target) {
  var currentNode = this.head;
  var result = '';
  while ( currentNode ) {
    result += currentNode.value + ' --> ';
    currentNode = currentNode.next;
  }
  return result + 'null';
};

LinkedList.prototype.nodeCount = function(target) {
  let currentNode = this.head;
  let nodeCount = 0;
  while ( currentNode ) {
    if (currentNode.value === target ) {
      nodeCount++;
    }
    currentNode = currentNode.next;
  }
  return nodeCount;
};

module.exports = LinkedList;