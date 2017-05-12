import LinkedList from './linkedListHelperFunctions';


var sumLists = function (List1, List2) {
  var result = new LinkedList();
  var currentNode1 = List1.head; 
  var currentNode2 = List2.head;
  var carry = 0;
  while ( currentNode1 || currentNode2 ) {
    
    var value1 = currentNode1 === null ? 0 : currentNode1.value;
    var value2 = currentNode2 === null ? 0 : currentNode2.value;
    var sum = value1 + value2 + carry;
    var value = sum > 9 ? sum % 10 : sum;
    carry = sum > 9 ? 1 : 0; 
    result.addToTail(value);
   
    currentNode1 = currentNode1 ? currentNode1.next : null;
    currentNode2 = currentNode2 ? currentNode2.next : null;
     
  }
  return result;
}; 

module.exports = sumLists;