function sortStack(size) {
  this.size = size
  this.initialStack = new Stack()
  this.sortedStack = new Stack()

  // let's initialize it with some random ints
  for ( let i = 0; i < size; i++ ) {
    this.initialStack.push(Math.floor(Math.random() * (size + 1)))
  }
}

sortStack.prototype.sortDescending = function() {
  while(!this.initialStack.isEmpty()) {
    let temp = this.initialStack.delete()

    while (!this.sortedStack.isEmpty() && this.sortedStack.peek() < temp){
      this.initialStack.push(this.sortedStack.delete())
    }
    this.sortedStack.push(temp)
  }
}

//Time Complexity: O(n^2)

const stackToBeSorted = new sortStack(10)
console.log(stackToBeSorted)
stackToBeSorted.sortDescending()
console.log(stackToBeSorted)
