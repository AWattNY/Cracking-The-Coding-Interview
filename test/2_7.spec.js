import LinkedList from '../src/linkedListHelperFunctions';
import findIntersection from '../src/2_7_findIntersection';
import { expect } from 'chai';

describe('Ctci - linkedList 2-7 find Intersection', function() {
  var linkedList1;
  var linkedList2;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  

  it('should return intersection node of 2 linkedLists', function() {
    linkedList1.addToTail(3);
    linkedList1.addToTail(1);
    linkedList1.addToTail(5);
    linkedList1.addToTail(9);
    linkedList1.addToTail(7);
    linkedList1.addToTail(2);
    linkedList1.addToTail(1);
    linkedList2.addToTail(4);
    linkedList2.addToTail(6);
    var node7 = linkedList1.head.next.next.next.next;
    var node6 = linkedList2.head.next;
    node6.next = node7;
    var intersect = findIntersection( linkedList1.head, linkedList2.head);
    expect(Object.is(intersect, node7)).to.equal(true);
    
  });

  it('should return null for non intersecting linkedLists', function() {
    linkedList1.addToTail('A');
    linkedList1.addToTail('B');
    linkedList1.addToTail('C');
    linkedList1.addToTail('D');
    linkedList1.addToTail('E');
    linkedList1.addToTail('F');
    linkedList2.addToTail('A');
    linkedList2.addToTail('B');
    linkedList2.addToTail('C');
    linkedList2.addToTail('D');
    linkedList2.addToTail('E');
    linkedList2.addToTail('F');
    var intersect = findIntersection( linkedList1.head, linkedList2.head);
    expect(Object.is(intersect, null)).to.equal(true);
    
  });



  
});