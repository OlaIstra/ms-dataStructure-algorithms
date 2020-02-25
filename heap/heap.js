function Heap() {
  this.items = []
}

Heap.prototype.swap = function(idx1, idx2) {
  const temp = this.items[idx1]
  this.items[idx1] = this.items[idx2]
  this.items[idx2] = temp
}

Heap.prototype.parentIdx = function(idx) {
  return Math.floor((idx-1) / 2)
}

Heap.prototype.leftChildIdx = function(idx) {
  return idx*2 + 1
}

Heap.prototype.rightChildIdx = function(idx) {
  return idx*2 + 2
}

Heap.prototype.parent = function(idx) {
  return this.items[this.parentIdx(idx)]
}

Heap.prototype.leftChild = function(idx) {
  return this.items[this.leftChildIdx(idx)]
}

Heap.prototype.rightChild = function(idx) {
  return this.items[this.rightChildIdx(idx)]
}

Heap.prototype.peek = function() {
  return this.items[0]
}

Heap.prototype.size = function() {
  return this.items.length
}
