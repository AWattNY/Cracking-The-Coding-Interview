import Stack from '../src/stackHelperFunctions';

const sortStack = (stack) => {
  if ( stack === null ) {
    return null;
  }
  let helperStack = new Stack();
  while ( stack.size() !== 0 ) {
    
    let temp = stack.pop();

    while ( (helperStack.size() !== 0) && (temp > helperStack.peek()) ) {
      stack.push(helperStack.pop());
    }

    helperStack.push(temp);
  }
  
  while ( helperStack.size() !== 0 ) {
    stack.push(helperStack.pop());
  }
  
};

module.exports = sortStack;