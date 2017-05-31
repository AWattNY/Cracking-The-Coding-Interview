import LinkedList from '../src/linkedListHelperFunctions';
import loopDetection from '../src/2_8_loopDetection';
import { expect } from 'chai';

describe('linkedList', function() {
  var linkedList1;
  var linkedList2;
  var entryPoint;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  

  it('should return the entryPoint to a linkedList loop', function() {
    linkedList1.addToTail('A');
    linkedList1.addToTail('B');
    linkedList1.addToTail('C');
    linkedList1.addToTail('D');
    linkedList1.addToTail('E');
    linkedList1.addToTail('F');
    linkedList1.addToTail('G');
    linkedList1.addToTail('H');
    var nodeF = linkedList1.head.next.next.next.next.next;
    linkedList1.tail.next = nodeF;
    entryPoint = loopDetection( linkedList1.head);
    expect(entryPoint.value).to.equal('F');
    
  });

  it('should return the entryPoint to a linkedList loop', function() {
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
    var nodeD = linkedList2.head.next.next.next;
    linkedList2.tail.next = nodeD;
    entryPoint = loopDetection( linkedList2.head);
    expect(entryPoint.value).to.equal('D');
    
  });



  
});