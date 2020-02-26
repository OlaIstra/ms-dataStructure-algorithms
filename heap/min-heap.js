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

function MinHeap() {
  this.items = []
}

MinHeap.prototype = Object.create(Heap.prototype) // inherit helpers from heap by copying prototype

MinHeap.prototype.bubbleDown = function() {
    let index = 0;
    while (this.leftChild(index) && this.leftChild(index) < this.items[index]) {
        let smallerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) &&
            this.rightChild(index) < this.items[smallerIndex]) {
            // if right is smaller, right swaps
            smallerIndex = this.rightChildrenIndex(index);
        }
        this.swap(smallerIndex, index);
        index = smallerIndex;
    }
}

MinHeap.prototype.bubbleUp = function() {
    var index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) > this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

var mh1 = new MinHeap();
mh1.add(1);
mh1.add(10);
mh1.add(5);
mh1.add(100);
mh1.add(8);

console.log(mh1.poll()); // 1
console.log(mh1.poll()); // 5
console.log(mh1.poll()); // 8
console.log(mh1.poll()); // 10
console.log(mh1.poll()); // 100
