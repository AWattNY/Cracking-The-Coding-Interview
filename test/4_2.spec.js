import Tree from '../src/treeHelperFunctions';
import minimalTree from '../src/4_2_minimalTree';
import { expect } from 'chai';

describe('Ctci - Trees and Graphs 4-2 minimal BST Tree', function() {
  

  it('should return BST if with minimal height 1', function() {
    var array = [6, 7, 8, 10, 11, 13, 15];
    var length = array.length;
    var node1 = minimalTree(array, 0, length - 1);
    var node2 = node1.left;
    var node3 = node1.right;
    var node4 = node2.left;
    var node5 = node2.right;
    var node6 = node3.left;
    var node7 = node3.right;
    expect(node1.value).to.equal(10);
    expect(node2.value).to.equal(7);
    expect(node3.value).to.equal(13);
    expect(node4.value).to.equal(6);
    expect(node5.value).to.equal(8);
    expect(node6.value).to.equal(11);
    expect(node7.value).to.equal(15);
    
  });

  it('should return BST if with minimal height 2', function() {
    var array = [6, 7, 8, 10, 11, 13, 15];
    var length = array.length;
    var node1 = minimalTree(array, 0, length - 1);
    var node2 = node1.left;
    var node3 = node1.right;
    var node4 = node2.left;
    var node5 = node2.right;
    var node6 = node3.left;
    var node7 = node3.right;
    expect(node1.value).to.equal(10);
    expect(node2.value).to.equal(7);
    expect(node3.value).to.equal(13);
    expect(node4.value).to.equal(6);
    expect(node5.value).to.equal(8);
    expect(node6.value).to.equal(11);
    expect(node7.value).to.equal(15);
    
  });



  
});