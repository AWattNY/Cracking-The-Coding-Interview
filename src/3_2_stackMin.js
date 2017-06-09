const StackMin = function() {
  this._storage = {};
  this._size = 0;
};


StackMin.prototype.push = function(value) {
  let node;
  let min;
  if ( this._size === 0 ) {
    node = { value, min: value }; 
  } else {
    let previousMin = this._storage[this._size - 1].min;
    node = { value, min: Math.min(previousMin, value) };
  }
  this._storage[this._size] = node;
  this._size++;
};

StackMin.prototype.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];
  
  delete this._storage[this._size];

  return result;
};

StackMin.prototype.size = function() {
  return this._size;
};

StackMin.prototype.peek = function() {
  return this._storage[this._size - 1];
};

StackMin.prototype.min = function() {
  return this._storage[this._size - 1].min;
};

module.exports = StackMin;