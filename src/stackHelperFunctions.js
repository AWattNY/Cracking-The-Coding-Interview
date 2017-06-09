// export Stack1 for pseudo-Classical Instantiation 
// export Stack for ES6 Classes

var Stack1 = function() {
  this._storage = {};
  this._size = 0;
};


Stack1.prototype.push = function(value) {
  this._storage[this._size] = value;
  this._size++;
};

Stack1.prototype.pop = function() {
  this._size && this._size--;
  var result = this._storage[this._size];

  delete this._storage[this._size];

  return result;
};

Stack1.prototype.size = function() {
  return this._size;
};

Stack1.prototype.peek = function() {
  return this._storage[this._size - 1];
};

class Stack {
  constructor() {
    this._storage = {};
    this._size = 0;
  }  


  push(value) {
    this._storage[this._size] = value;
    this._size++;
  }

  pop() {
    this._size && this._size--;
    var popped = this._storage[this._size];

    delete this._storage[this._size];

    return popped;
  }

  size() {
    return this._size;
  }

  peek() {
    return this._storage[this._size - 1];
  }

}

module.exports = Stack;