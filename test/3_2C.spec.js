import Stack from '../src/3_2C_stackMin';
import { expect } from 'chai';

describe('Ctci - Stacks and Queues 3-2 Stack min', function() {
  var stack;
  beforeEach(function() {
    stack = new Stack();
  });
   
  it('reports a size of zero for a new stack', function() {
    expect(stack.size()).to.equal(0);
  });

  it('reports a min equal to the only element of the stack', function() {
    stack.push(20);
    expect(stack.min()).to.equal(20);
  });

  it('reports a new min if new value added is smaller than current min', function() {
    stack.push(20);
    stack.push(15);
    expect(stack.min()).to.equal(15);
  });

  it('reports previous min after current min is popped', function() {
    stack.push(20);
    stack.push(15);
    let popped = stack.pop();
    expect(popped).to.equal(15);
    expect(stack.min()).to.equal(20);
  });

  it('reports sequentially new min values ', function() {
    stack.push(20);
    expect(stack.min()).to.equal(20);
    stack.push(15);
    expect(stack.min()).to.equal(15);
    stack.push(10);
    expect(stack.min()).to.equal(10);
    let popped1 = stack.pop();
    let popped2 = stack.pop();
    expect(popped1).to.equal(10);
    expect(popped2).to.equal(15);
    expect(stack.min()).to.equal(20);
  });
  it('reports same min after larger than min number is added', function() {
    stack.push(20);
    stack.push(30);
    expect(stack.min()).to.equal(20);
  });

});

