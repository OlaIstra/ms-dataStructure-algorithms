function DLLNode(key, data) {
  this.key = key
  this.data = data

  this.next = null
  this.prev = null
}

function LRUCache(capacity) {
  this.keys = {}
  this.capacity = capacity

  this.head = new DLLNode('', null)
  this.tail = new DLLNode('', null)

  this.head.next = this.tail
  this.tail.prev = this.head
}

LRUCache.prototype.addNode = function(node) { // before tail - as I think
  let temp = this.tail.prev
  temp.next = node 
  this.tail.prev = node
  node.prev = temp
  node.next = this.tail
}

LRUCache.prototype.removeNode = function(node) { 
  let prev = node.prev
  let next = node.next 
  prev.next = next
  next.prev = prev
}

LRUCache.prototype.get = function(key) {
  let node = this.keys[key]

  if (node === undefined) {
    return null
  } else {
    this.removeNode(node)
    this.addNode(node)
    return node.data
  }
}

LRUCache.prototype.set = function(key, value) {
  let node = this.keys[key]

  if (node) {
    this.removeNode(node)
  }

  let newNode = new DLLNode(key, value)

  this.addNode(newNode)
  this.keys[key] = newNode

  // evict a node
  if (Object.keys(this.keys).length > this.capacity) {
    let head = this.head.next // why delete this.head.next but not a this.head
    this.removeNode(head)
    delete this.keys[head.key]
  }
}

const myLRU = new LRUCache(5)

myLRU.set(1, 1)
myLRU.set(2, 2)
myLRU.set(3, 3)
myLRU.set(4, 4)
myLRU.set(5, 5)

myLRU.get(1)
myLRU.get(2)

myLRU.set(6, 6)
myLRU.set(7, 7)
myLRU.set(8, 8)

console.log(myLRU)
