function Stack(array) {
  this.array = []
  if(array) this.array = array
}

Stack.prototype.getBuffer = function() {
  return this.array.slice()
}

Stack.prototype.isEmpty = function() {
  return this.array.length === 0
}

Stack.prototype.peek = function() { //Time Complexity: O(1) 
  return this.array[array.length - 1]
}

Stack.prototype.push = function(val) { //Time Complexity: O(1) 
  return this.array.push(val)
}

Stack.prototype.delete = function() { //Time Complexity: O(1) 
  return this.array.pop()
}

// to access the n-element from the top

function stackAccessNthTopNode(stack, n) { // Time Complexity: O(n)
  const bufferArray = stack.getBuffer()

  const bufferStack = new Stack(bufferArray)

  while(--n !== 0) {
    bufferStack.delete()
  }

  return bufferStack.delete();
}

// to search the element from the top

function stackSearch(stack, elem) { // Time Complexity: O(n)
  const bufferArray = stack.getBuffer()

  const bufferStack = new Stack(bufferArray)

  while(!bufferStack.isEmpty()) {
    if (bufferStack.delete() === elem) {
      return true
    }
  }

  return false;
}

var stack2 = new Stack();
stack2.push(1);
stack2.push(2);
stack2.push(3);
console.log(stackAccessNthTopNode(stack2,2))
