import Stack from '../src/stackHelperFunctions';
import sortStack from '../src/3_5_sortStack';
import { expect } from 'chai';

describe('Ctci - Stacks and Queues 3-5 Sort Stack', function() {
  var stack;
  
  
  beforeEach(function() {
    stack = new Stack();    
  });

  it('should return null for if argument is null', function() {
    var sortedStack = sortStack(null);
    expect(Object.is(sortedStack, null)).to.equal(true);
  });

  it('should return an empty stack if argument is an empty stack', function() {
    sortStack(stack);
    expect(stack.size()).to.equal(0);
  });

  it('should return a sorted stack', function() {
    stack.push(4);
    stack.push(7);
    stack.push(22);
    stack.push(5);
    stack.push(30);
    sortStack(stack);
    var first = stack.pop();
    var second = stack.pop();
    var third = stack.pop();
    var fourth = stack.pop();
    var fifth = stack.pop();

    expect(first).to.equal(30);
    expect(second).to.equal(22);
    expect(third).to.equal(7);
    expect(fourth).to.equal(5);
    expect(fifth).to.equal(4);
  });


  



});