import Graph from '../src/graphHelperFunctions';
import getRouteBetween from '../src/4_1_getRouteBetween';
import { expect } from 'chai';

describe('Ctci - Trees and Graphs 4-1 route between nodes', function() {
  var graph1;
  var graph2;

  beforeEach(function() {
    graph1 = new Graph();
  });

  

  it('should return true if there is a route between two nodes', function() {
    graph1.addNode('A');
    graph1.addNode('B');
    graph1.addNode('C');
    graph1.addNode('D');
    graph1.addNode('E');
    graph1.addNode('X');
    graph1.addNode('Y');
    graph1.addEdge('A', 'B');
    graph1.addEdge('B', 'C');
    graph1.addEdge('C', 'D');
    graph1.addEdge('C', 'E');
    expect(getRouteBetween(graph1, 'A', 'E')).to.equal(true);
    
  });

  it('should return false if there is no route between two nodes', function() {
    graph1.addNode('A');
    graph1.addNode('B');
    graph1.addNode('C');
    graph1.addNode('D');
    graph1.addNode('E');
    graph1.addNode('X');
    graph1.addNode('Y');
    graph1.addEdge('A', 'B');
    graph1.addEdge('A', 'C');
    graph1.addEdge('C', 'D');
    graph1.addEdge('C', 'E');
    graph1.addEdge('X', 'Y');
    expect(getRouteBetween(graph1, 'A', 'X')).to.equal(false);
    
  });



  
});