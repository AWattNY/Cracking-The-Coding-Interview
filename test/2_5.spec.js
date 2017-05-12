import LinkedList from '../src/linkedListHelperFunctions';
import sumLists from '../src/2_5_sumLists';
import { expect } from 'chai';

describe('linkedList', function() {
  var linkedList1;
  var linkedList2;
  var sum;

  beforeEach(function() {
    linkedList1 = new LinkedList();
    linkedList2 = new LinkedList();
  });

  it('should have a head and tail', function() {
    sum = sumLists(linkedList1, linkedList2);
    expect(sum).to.have.property('head');
    expect(sum).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    sum = sumLists(linkedList1, linkedList2);
    expect(sum.addToTail).to.be.a('function');
    expect(sum.removeHead).to.be.a('function');
    expect(sum.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    sum = sumLists(linkedList1, linkedList2);
    sum.addToTail(4);
    expect(sum.tail.value).to.equal(4);
    sum.addToTail(5);
    expect(sum.tail.value).to.equal(5);
  });

  it('should contain a value that was added', function() {
    sum = sumLists(linkedList1, linkedList2);
    sum.addToTail(4);
    sum.addToTail(5);
    expect(sum.contains(4)).to.equal(true);
    expect(sum.contains(5)).to.equal(true);
    expect(sum.contains(6)).to.equal(false);
  });

  it('should return the sum of the 2 linked lists', function() {
    linkedList1.addToTail(7);
    linkedList1.addToTail(1);
    linkedList1.addToTail(6);
    linkedList2.addToTail(5);
    linkedList2.addToTail(9);
    linkedList2.addToTail(2);
    sum = sumLists( linkedList1, linkedList2);
    expect(sum.convertToNumber()).to.equal(912);
    
  });

  it('should return the sum of the 2 linked lists of different length', function() {
    linkedList1.addToTail(1);
    linkedList1.addToTail(2);
    linkedList1.addToTail(3);
    linkedList1.addToTail(1);
    linkedList2.addToTail(3);
    linkedList2.addToTail(4);
    linkedList2.addToTail(5);
    sum = sumLists( linkedList1, linkedList2);
    expect(sum.convertToNumber()).to.equal(1864);
    
  });



  // add more tests here to test the functionality of linkedList
});
