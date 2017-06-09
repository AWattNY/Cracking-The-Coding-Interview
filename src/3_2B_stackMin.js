import Stack from '../src/stackHelperFunctions';

class StackMin extends Stack {
  constructor() {
    super();
  }  

  _push(value) {
    let node;
    let min;
    if ( this.size() === 0 ) {
      node = { value, min: value }; 
    } else {
      let previousMin = this.peek().min;
      node = { value, min: Math.min(previousMin, value) };
    }
    this.push(node);
  }
  _pop() {
    let popped = this.pop();
    return popped.value;
  }

  min() {
    return this.peek().min;
  }

}

module.exports = StackMin;