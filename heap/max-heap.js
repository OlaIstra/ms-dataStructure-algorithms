function Heap() {
    this.items = [];
}

Heap.prototype.swap = function(index1, index2) {
    var temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
}

Heap.prototype.parentIndex = function(index) {
    return Math.floor((index - 1) / 2);
}

Heap.prototype.leftChildIndex = function(index) {
    return index * 2 + 1;
}

Heap.prototype.rightChildrenIndex = function(index) {
    return index * 2 + 2;
}

Heap.prototype.parent = function(index) {
    return this.items[this.parentIndex(index)];
}

Heap.prototype.leftChild = function(index) {
    return this.items[this.leftChildIndex(index)];
}

Heap.prototype.rightChild = function(index) {
    return this.items[this.rightChildrenIndex(index)];
}

Heap.prototype.peek = function(item) {
    return this.items[0];
}
Heap.prototype.size = function() {
    return this.items.length;
}

function MaxHeap() {
    this.items = [];
}
MaxHeap.prototype = Object.create(Heap.prototype); // inherit helpers from heap by copying prototype
MaxHeap.prototype.poll = function() {
    var item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
}

MaxHeap.prototype.bubbleDown = function() {
    var index = 0;
    while (this.leftChild(index) && (this.leftChild(index) > this.items[index] || this.rightChild(index) > this.items[index])) {
        var biggerIndex = this.leftChildIndex(index);
        if (this.rightChild(index) && this.rightChild(index) > this.items[bigger\ Index]) {
            biggerIndex = this.rightChildrenIndex(index);
        }
        this.swap(biggerIndex, index);
        index = biggerIndex;
    }
}

MaxHeap.prototype.bubbleUp = function() {
    var index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) < this.items[index]) {
        this.swap(this.parentIndex(index), index);
        index = this.parentIndex(index);
    }
}

var mh2 = new MaxHeap();
mh2.add(1);
mh2.add(10);
mh2.add(5);
mh2.add(100);
mh2.add(8);

console.log(mh2.poll()); // 100
console.log(mh2.poll()); // 10
console.log(mh2.poll()); // 8
console.log(mh2.poll()); // 5
console.log(mh2.poll()); // 1
