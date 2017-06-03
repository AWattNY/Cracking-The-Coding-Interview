import LinkedList from '../src/linkedListHelperFunctions';
import removeDupes from '../src/2_1_removeDupes';
import { expect } from 'chai';

describe('Ctci - linkedList 2-1 remove dupes', function() {
  var linkedList1;
  var linkedList2;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  

  it('should remove duplicate node from linkedList', function() {
    linkedList1.addToTail('A');
    linkedList1.addToTail('B');
    linkedList1.addToTail('C');
    linkedList1.addToTail('D');
    linkedList1.addToTail('C');
    linkedList1.addToTail('F');
    linkedList1.addToTail('G');
    linkedList1.addToTail('H');
    removeDupes( linkedList1.head);
    expect(linkedList1.nodeCount('C')).to.equal(1);
    
  });

  it('should rmove multiple dupes when present a linkedList', function() {
    linkedList2.addToTail('A');
    linkedList2.addToTail('B');
    linkedList2.addToTail('C');
    linkedList2.addToTail('D');
    linkedList2.addToTail('B');
    linkedList2.addToTail('F');
    linkedList2.addToTail('G');
    linkedList2.addToTail('H');
    linkedList2.addToTail('B');
    linkedList2.addToTail('J');
    linkedList2.addToTail('K');
    removeDupes( linkedList2.head);
    expect(linkedList2.nodeCount('B')).to.equal(1);
    
  });



  
});