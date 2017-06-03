import LinkedList from '../src/linkedListHelperFunctions';
import isPalindrome from '../src/2_6_isPalindrome';
import { expect } from 'chai';

describe('Ctci - linkedList 2-6 is Palindrome', function() {
  var linkedList1;
  var linkedList2;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  

  it('should return false if linkedList is not a Palindrome', function() {
    linkedList1.addToTail('A');
    linkedList1.addToTail('B');
    linkedList1.addToTail('C');
    linkedList1.addToTail('D');
    linkedList1.addToTail('E');
    linkedList1.addToTail('F');
    linkedList1.addToTail('G');
    linkedList1.addToTail('H');
    var head = linkedList1.head;
    expect(isPalindrome(head)).to.equal(false);
    
  });

  it('should return true if linkedList is a Palindrome', function() {
    linkedList2.addToTail('A');
    linkedList2.addToTail('B');
    linkedList2.addToTail('C');
    linkedList2.addToTail('D');
    linkedList2.addToTail('E');
    linkedList2.addToTail('D');
    linkedList2.addToTail('C');
    linkedList2.addToTail('B');
    linkedList2.addToTail('A');
    var head = linkedList2.head;
    expect(isPalindrome(head)).to.equal(true);
    
  });



  
});