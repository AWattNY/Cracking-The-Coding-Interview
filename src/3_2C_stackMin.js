import Stack from '../src/stackHelperFunctions';

class StackMin extends Stack {
  constructor() {
    super();
  }  

  push(value) {
    let node;
    if ( super.size() === 0 ) {
      node = { value, min: value }; 
    } else {
      let previousMin = super.peek().min;
      node = { value, min: Math.min(previousMin, value) };
    }
    super.push(node);
  }
  pop() {
    let popped = super.pop();
    return popped.value;
  }

  peek() {
    return super.peek().value;
  }

  min() {
    return super.peek().min;
  }

}

module.exports = StackMin;