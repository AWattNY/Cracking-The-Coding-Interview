import isBalanced from '../src/4_4_isBalanced';
import { expect } from 'chai';

describe('Ctci - Trees and Graphs 4-4 Check Balanced', function() {
  var tree;
  const BST = function(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  };
  
  
  

  it('should return true if BST is Balanced', function() {
    var node1 = new BST(10);
    node1.left = new BST(7);
    node1.right = new BST(13);
    node1.left.left = new BST(6);
    node1.left.right = new BST(8);
    node1.right.left = new BST(11);
    node1.right.right = new BST(15);
   
    expect(isBalanced(node1)).to.equal(true);
    
  });

  it('should return false if BST is Not Balanced', function() {
    var node1 = new BST(10);
    node1.left = new BST(7);
    node1.right = new BST(13);
    node1.left.left = new BST(6);
    node1.left.right = new BST(8);
    node1.right.left = new BST(11);
    node1.right.right = new BST(15);
    node1.right.right.left = new BST(14);
    node1.right.right.right = new BST(22);
    node1.right.right.right.left = new BST(18);
    node1.right.right.right.right = new BST(32);
    expect(isBalanced(node1)).to.equal(false);
    
  });



  
});