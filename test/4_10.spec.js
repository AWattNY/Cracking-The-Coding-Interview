import { isSubtree } from '../src/4_10_checkSubtree';
import { expect } from 'chai';

describe('Ctci - Trees and Graphs 4-10 paths check subtree', function() {
  var node1;
  var node2;
  const BT = function(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  };

  it('should return false if Tree2 is not subtree of T1', function() {
    node1 = new BT(10);
    node1.left = new BT(5);
    node1.right = new BT(-3);
    node1.right.right = new BT(19);
    node1.left.left = new BT(3);
    node1.left.right = new BT(1);
    node1.left.left.left = new BT(-2);
    node1.left.left.right = new BT(-6);
    node1.left.left.left.left = new BT(4);
    node1.left.left.right.right = new BT(14);

    node2 = new BT(3);
    node2.left = new BT(-2);
    node2.right = new BT(-6);
    node2.left.left = new BT(4);
    node2.right.right = new BT(14);
    expect(isSubtree(node1, node2)).to.equal(true);
    
  });

  it('should return false if Tree2 is not subtree of T1', function() {
    node1 = new BT(10);
    node1.left = new BT(5);
    node1.right = new BT(-3);
    node1.right.right = new BT(19);
    node1.left.left = new BT(3);
    node1.left.right = new BT(1);
    node1.left.left.left = new BT(-2);
    node1.left.left.right = new BT(-6);
    node1.left.left.left.left = new BT(4);
    node1.left.left.right.right = new BT(14);

    node2 = new BT(3);
    node2.left = new BT(-2);
    node2.right = new BT(-6);
    node2.left.left = new BT(9);
    node2.right.right = new BT(14);
    expect(isSubtree(node1, node2)).to.equal(false);
    
  });



  
});