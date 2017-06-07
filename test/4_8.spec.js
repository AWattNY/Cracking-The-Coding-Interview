import firstCommonAncestor from '../src/4_8_firstCommonAncestor';
import { expect } from 'chai';

describe('Ctci - Trees and Graphs 4-8 FirstCommonAncestor', function() {
  var tree;
  const BST = function(value) {
    this.value = value;
    this.parent = null;
    this.right = null;
    this.left = null;
  };
  
  
  it('should return null if one of nodes is null ', function() {
    var node1 = new BST(10);
    node1.left = new BST(7);
    node1.right = new BST(13);
    node1.left.left = new BST(6);
    node1.left.right = new BST(8);
    node1.right.left = new BST(11);
    node1.right.right = new BST(15);
    var fca = firstCommonAncestor(null, node1.right.right);
    expect(Object.is(fca, null)).to.equal(true);
    
  });

  it('should return correct first Common Ancestor ', function() {
    var node10 = new BST(10);
    var node7 = new BST(7);
    node10.left = node7;
    var node13 = new BST(13);
    node10.right = node13;
    var node6 = new BST(6);
    node7.left = node6;
    var node8 = new BST(8);
    node7.right = node8;
    var node11 = new BST(11);
    var node15 = new BST(15);
    node13.left = node11;
    node13.right = node15;
    node11.parent = node13;
    node15.parent = node13;
    node6.parent = node7;
    node8.parent = node7;
    node7.parent = node10;
    node13.parent = node10;
    var fca = firstCommonAncestor(node8, node15);
    expect(Object.is(fca, node10)).to.equal(true);
    
  });

  it('should return correct first Common Ancestor', function() {
    var node10 = new BST(10);
    var node7 = new BST(7);
    node10.left = node7;
    var node13 = new BST(13);
    node10.right = node13;
    var node6 = new BST(6);
    node7.left = node6;
    var node8 = new BST(8);
    node7.right = node8;
    var node11 = new BST(11);
    var node15 = new BST(15);
    var node14 = new BST(14);
    var node22 = new BST(22);
    var node18 = new BST(18);
    var node32 = new BST(32);
    node13.left = node11;
    node13.right = node15;
    node15.left = node14;
    node15.right = node22;
    node22.right = node32;
    node22.left = node18;
    node11.parent = node13;
    node15.parent = node13;
    node6.parent = node7;
    node8.parent = node7;
    node7.parent = node10;
    node13.parent = node10;
    node14.parent = node15;
    node22.parent = node15;
    node18.parent = node22;
    node32.parent = node22;
    var fca1 = firstCommonAncestor(node14, node32);
    expect(Object.is(fca1, node15)).to.equal(true);
    var fca2 = firstCommonAncestor(node6, node15);
    expect(Object.is(fca2, node10)).to.equal(true);
    var fca3 = firstCommonAncestor(node8, node22);
    expect(Object.is(fca3, node10)).to.equal(true);
    var fca4 = firstCommonAncestor(node6, node8);
    expect(Object.is(fca4, node7)).to.equal(true);

    
  });



  
});