function TwoStackQueue(){
  this.inbox = new Stack()
  this.outbox = new Stack()
}

TwoStackQueue.prototype.enqueue = function(val) {
  this.inbox.push(val)
}

TwoStackQueue.prototype.dequeue = function() {
  
  if(this.outbox.isEmpty()) {
    while (!this.inbox.isEmpty()) {      
      this.outbox.push(this.inbox.array.pop())
    }
  }
  return this.outbox.array.pop()
}

const queue = new TwoStackQueue()
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
