import { countPaths } from '../src/4_12_pathsWithSum';
import { expect } from 'chai';

describe('Ctci - Trees and Graphs 4-12 paths with sum', function() {
  var tree;
  const BT = function(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  };
  
  
  

  it('should return 0 paths for null', function() {
    expect(countPaths(null, 16)).to.equal(0);
    
  });

  it('should return correct number of paths for binary tree ', function() {
    var node1 = new BT(10);
    node1.left = new BT(5);
    node1.right = new BT(-3);
    node1.right.right = new BT(19);
    node1.left.left = new BT(3);
    node1.left.right = new BT(1);
    node1.left.left.left = new BT(-2);
    node1.left.left.right = new BT(-6);
    node1.left.left.left.left = new BT(4);
    node1.left.left.right.right = new BT(14);
    expect(countPaths(node1, 16)).to.equal(4);
    
  });



  
});