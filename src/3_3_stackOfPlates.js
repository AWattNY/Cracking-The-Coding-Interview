import Stack from '../src/stackHelperFunctions';

const SetOfStacks = function() {
  this.stacks = [];
  this.capacityPerStack	= 10;
  this._size = 0;
};

SetOfStacks.prototype.push = function(value) {
  let lastStack;
  let length;
  if (this.stacks.length === 0) {
    this.stacks.push(new Stack());       
  } 
  length = this.stacks.length;
  lastStack = this.stacks[length - 1];
  lastStack.push(value);
  if (lastStack.size() >= this.capacityPerStack) {
    this.stacks.push(new Stack());
  }
  this._size++;
};

SetOfStacks.prototype.pop = function() {
  let length = this.stacks.length;
  if ( length === 0 ) {
    return;
  }
  let lastStack = this.stacks[length - 1];
  let popped = lastStack.pop();
  if ( lastStack.size() === 0 ) {
    this.stacks.pop();
  }
  this._size && this._size--;
  return popped;    
};

SetOfStacks.prototype.size = function() {
  return this._size;
};

module.exports = SetOfStacks;