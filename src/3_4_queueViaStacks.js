import Stack from '../src/stackHelperFunctions';

const MyQueue = function() {
  this.q = new Stack();
  this.dq = new Stack();
  this._size = 0;    
};

MyQueue.prototype.enqueue = function(value) {
  this.q.push(value);
  this._size++;
};

MyQueue.prototype.dequeue = function() {
  if ( this.dq.size() === 0 ) {
    while ( this.q.size() !== 0 ) {
      this.dq.push(this.q.pop());
    }
  }
  this._size && this._size--;
  return this.dq.pop();
};

MyQueue.prototype.size = function() {
  return this._size;
};

module.exports = MyQueue;