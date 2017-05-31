import LinkedList from '../src/linkedListHelperFunctions';
import kthToLast from '../src/2_2_kthToLast';
import { expect } from 'chai';

describe('linkedList', function() {
  var linkedList1;
  var linkedList2;
  var kthToLastNode;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  

  it('should return the 2nd to last node', function() {
    linkedList1.addToTail('A');
    linkedList1.addToTail('B');
    linkedList1.addToTail('C');
    linkedList1.addToTail('D');
    linkedList1.addToTail('E');
    linkedList1.addToTail('F');
    linkedList1.addToTail('G');
    linkedList1.addToTail('H');
    kthToLastNode = kthToLast(linkedList1.head, 2);
    expect(kthToLastNode.value).to.equal('G');
    
  });

  it('should return the 6th to last node', function() {
    linkedList2.addToTail('A');
    linkedList2.addToTail('B');
    linkedList2.addToTail('C');
    linkedList2.addToTail('D');
    linkedList2.addToTail('E');
    linkedList2.addToTail('F');
    linkedList2.addToTail('G');
    linkedList2.addToTail('H');
    linkedList2.addToTail('I');
    linkedList2.addToTail('J');
    linkedList2.addToTail('K');
    kthToLastNode = kthToLast(linkedList2.head, 6);
    expect(kthToLastNode.value).to.equal('F');
    
  });



  
});