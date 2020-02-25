function LFUNode(key, val) {
  this.data = val
  this.key = key 

  this.prev = null
  this.next = null
  this.count = 1
}

function LFUList() { // based on DoubleLinkedList
  this.head = new LFUNode('buffer head', null)
  this.tail = new LFUNode('buffer tail', null)

  this.head.next = this.tail
  this.tail.prev = this.head

  this.size = 0
}

function LFUCache(capacity) {
  this.keys = {}; // stores LFUNode
  this.freq = {}; // stores LFUList
  this.capacity = capacity;
  this.minFreq = 0;
  this.size =0;
}

LFUList.prototype.insertAtHead = function(node) { // as I think "to insert after head"
  node.next = this.head.next
  this.head.next.prev = node
  this.head.next = node 
  node.prev = this.head
  this.size++
}

LFUList.prototype.removeAtTail = function() {
  let oldTail = this.tail.prev
  let prev = this.tail.prev

  prev.prev.tail = this.tail
  this.tail.prev = prev.prev
  this.size--
  return oldTail
}

LFUList.prototype.removeNode = function(node) {
  node.prev.next = node.next
  node.next.prev = node.prev
  this.size--;
}

LFUCache.prototype.set = function(key, value) {
  let node = this.keys[key];

  if (node === undefined) {
    node = new LFUNode(key, value);

    this.keys[key] = node;

    if (this.size != this.capacity) {
    // insert without deleting
      if (this.freq[1] === undefined){
        this.freq[1] = new LFUList();
      }
      this.freq[1].insertAtHead(node);
      this.size++;
    } else {
      // delete and insert
      let oldTail = this.freq[this.minFreq].removeAtTail();
      delete this.keys[oldTail.key];

      if (this.freq[1] === undefined){
        this.freq[1] = new LFUList();
      }

      this.freq[1].insertAtHead(node);
    }
    this.minFreq = 1;
  } else {
    let oldFreqCount = node.freqCount;
    node.data = value;
    node.freqCount++;

    this.freq[oldFreqCount].removeNode(node);

    if (this.freq[node.freqCount] === undefined){
      this.freq[node.freqCount] = new LFUList();
    }

    this.freq[node.freqCount].insertAtHead(node);

    if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).size == 0) {
      this.minFreq++;
    }
  }
}

LFUCache.prototype.get = function(key) {
  var node = this.keys[key];

  if (node == undefined) {
    return null;
  } else {

    var oldFreqCount = node.freqCount;
    node.freqCount++;
 
    this.freq[oldFreqCount].removeNode(node);

    if (this.freq[node.freqCount] === undefined){
      this.freq[node.freqCount] = new LFUList();
    }

    this.freq[node.freqCount].insertAtHead(node);

    if (oldFreqCount == this.minFreq && Object.keys(this.freq[oldFreqCount]).length == 0) {
      this.minFreq++;
    }
    return node.data;
  }
}


