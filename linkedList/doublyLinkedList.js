function DoublyLinkedListNode(val) {
  this.data = val
  this.next = null
  this.prev = null
}

function DoublyLinkedList() {
  this.head = null
  this.tail = null
  this.size = 0
}

DoublyLinkedList.prototype.isEmpty = function() {
  return this.size === 0
}

DoublyLinkedList.prototype.insertAtTail = function(val) { //Time Complexity: O(1) 
  //if the first node 
  if (this.tail === null) {
    this.tail = new DoublyLinkedListNode(val)
    this.head = this.tail
  } else {
    let newNode = new DoublyLinkedListNode(val)
    newNode.prev = this.tail
    this.tail = newNode
    this.tail.next = newNode
  }
  this.size++
}

DoublyLinkedList.prototype.insertAtHead = function(val) { //Time Complexity: O(1) 
  //if the first node 
  if (this.head === null) {
    this.head = new DoublyLinkedListNode(val)
    this.tail = this.head
  } else {
    let newNode = new DoublyLinkedListNode(val)
    newNode.next = this.head
    this.head.next = newNode
    this.head = newNode    
  }
  this.size++
}

DoublyLinkedList.prototype.deleteFromHead = function() { //Time Complexity: O(1) 
  let toReturn = null 

  if (this.head !== null) {
    toReturn = this.head.data

    if (this.tail === this.head) {
      this.tail = null
      this.head = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }

    this.size--
    return toReturn
  }
}

DoublyLinkedList.prototype.deleteFromTail = function() { //Time Complexity: O(1) 
  let toReturn = null 

  if (this.tail !== null) {
    toReturn = this.tail.data

    if (this.tail === this.head) {
      this.tail = null
      this.head = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.size--
    return toReturn
  }
}

DoublyLinkedList.prototype.findStartingHead = function(val) { // Time Complexity: O(n) 
  let curHead = this.head

  while(curHead.next) {
    if (curHead.data === val) {
      return true 
    }
    curHead = curHead.next
  }
  return false
}

DoublyLinkedList.prototype.findStartingTail = function(val) { // Time Complexity: O(n) 
  let curTail = this.tail

  while(curTail.prev) {
    if (curTail.data === val) {
      return true 
    }
    curTail = curTail.prev
  }
  return false
}
