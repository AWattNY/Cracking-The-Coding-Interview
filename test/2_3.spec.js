import LinkedList from '../src/linkedListHelperFunctions';
import deleteNode from '../src/2_3_deleteNode';
import { expect } from 'chai';

describe('Ctci - linkedList 2-3 delete Node', function() {
  var linkedList1;
  var linkedList2;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  it('should return false for an empty linkedList ', function() {
    var head = linkedList1.head;
    var returnedValue = deleteNode( head );
    expect(returnedValue).to.equal(false);
    
  });

  it('should return false for a linkedList with one node ', function() {
    linkedList1.addToTail('A');
    var head = linkedList1.head;
    var returnedValue = deleteNode( head );
    expect(returnedValue).to.equal(false);
    
  });


  it('should delete node in linkedList ', function() {
    linkedList1.addToTail('A');
    linkedList1.addToTail('B');
    linkedList1.addToTail('C');
    linkedList1.addToTail('D');
    linkedList1.addToTail('E');
    linkedList1.addToTail('F');
    linkedList1.addToTail('G');
    linkedList1.addToTail('H');
    var nodeD = linkedList1.head.next.next.next;
    var returnedValue = deleteNode( nodeD );
    expect(linkedList1.contains(nodeD)).to.equal(false);
    expect(returnedValue).to.equal(true);
    
  });

  it('should delete node in linkedList', function() {
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
    var nodeF = linkedList2.head.next.next.next.next.next;
    var returnedValue = deleteNode( nodeF );
    expect(linkedList1.contains(nodeF)).to.equal(false);
    expect(returnedValue).to.equal(true);    
  });



  
});