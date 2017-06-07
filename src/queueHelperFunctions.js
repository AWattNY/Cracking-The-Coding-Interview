var Queue = function() {
  this._storage = {};
  this._start = 0;
  this._end = 0;
};


Queue.prototype.enqueue = function(value) {
  this._storage[this._end++] = value;
};

Queue.prototype.dequeue = function() {
  // This does some unnecessary work sometimes. Can you spot why?
  var result = this._storage[this._start];
  delete this._storage[this._start];

  this.size() && this._start++;

  return result;
};

Queue.prototype.size = function() {
  return this._end - this._start;
};

Queue.prototype.peek = function() {
  return this._storage[this._start];
};


module.exports = Queue;