import Stack from '../src/stackHelperFunctions';
import MyQueue from '../src/3_4_queueViaStacks';
import { expect } from 'chai';

describe('Ctci - Stacks and Queues 3-4 Queue via Stacks', function() {
  var queue;
  
  it('reports a size of zero for a new queue', function() {
    queue = new MyQueue();
    expect(queue.size()).to.equal(0);
  });

  it('reports a size of 2 after adding two items', function() {
    queue = new MyQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.size()).to.equal(2);
  });

  it('reports a size of 1 after adding two items and removing one', function() {
    queue = new MyQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    expect(queue.size()).to.equal(1);
  });

  it('reports a size of 0 after removing more items than were added', function() {
    queue = new MyQueue();
    queue.enqueue('a');
    queue.dequeue();
    queue.dequeue();
    expect(queue.size()).to.equal(0);
  });

  it('allows sequentially adding and removing items', function() {
    queue = new MyQueue();
    queue.enqueue('a');
    expect(queue.dequeue()).to.equal('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('b');
  });
  it('removes the least recently added of two items', function() {
    queue = new MyQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    expect(queue.dequeue()).to.equal('a');
  });

  it('removes the oldest item, after newer items have already been added and removed', function() {
    queue = new MyQueue();
    queue.enqueue('a');
    queue.enqueue('b');
    queue.dequeue();
    queue.enqueue('c');
    expect(queue.dequeue()).to.equal('b');
  });

  

});