function Queue(arr) {
  this.arr = []
  if (arr) this.arr = arr
}

Queue.prototype.getBuffer = function() {
  return this.arr.slice()
}

Queue.prototype.isEmpty = function() {
  return this.arr.length === 0
}

Queue.prototype.peek = function() {
  return this.arr[0]
}

Queue.prototype.enqueue = function(val) { //Time Complexity: O(1) 
  return this.arr.push(val)
}

Queue.prototype.dequeue = function() { //Time Complexity: O(n)
  return this.arr.shift()
}

// to  access the nth lastadded node

function queueAccessNthTopNode(queue, n){  //Time Complexity: O(n)
  var bufferArray = queue.getBuffer();
  if(n<=0) throw 'error'

  var bufferQueue = new Queue(bufferArray);

  while(--n !== 0){
    bufferQueue.dequeue()
  }

  return bufferQueue.dequeue();
}

// to search a queue to check whether an element exists within a queue

function queueSearch(queue, element){  //Time Complexity: O(n)
  var bufferArray = queue.getBuffer();

  var bufferQueue = new Queue(bufferArray);

  while(!bufferQueue.isEmpty()){
    if(bufferQueue.dequeue() === element){
      return true;
    }
  }

  return false;
}
