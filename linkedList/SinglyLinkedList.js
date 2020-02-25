function SinglyLinkedListNode(data) {
  this.data = data
  this.next = null
}

function SinglyLinkedList() {
  this.head = null
  this.size = 0
}

SinglyLinkedList.prototype.insert = function(val) { // Time Complexity: O(1)
  if (this.head === null) {
    this.head = new SinglyLinkedListNode(val)
  } else {
    const temp = this.head
    this.head = new SinglyLinkedListNode(val)
    this.head.next = temp
  }
  this.size++
}

SinglyLinkedList.prototype.remove = function(val) { //Time Complexity: O(n)
  let curHead = this.head 
  if (curHead.data === val) {
    this.head = curHead.next
    this.size--
  } else {
    let prev = curHead
    while (curHead.next) {
      if (curHead.data === val) {
         prev.next = curHead.next
         prev = curHead
         curHead = curHead.next
         break
      }
      prev = curHead
      curHead = curHead.next
    }
    //if wasn't found in the middle or head, must be tail
    if (curHead.data === val) {
      prev.next = null
    }
    this.size--
  }
}

SinglyLinkedList.prototype.deleteAtHead = function() { // Time Complexity: O(1)
  if (this.head !== null) {
    this.head = this.head.next
  }
  this.size--
}

SinglyLinkedList.prototype.search = function(val) {
  let curHead = this.head
  while(curHead.next) {
    if (curHead.data === val) {
      return true
    }
    curHead = curHead.next
  }
  return false
}

var sll1 = new SinglyLinkedList();
sll1.insert(1); // linked list is now: 1 -> null
sll1.insert(12); // linked list is now: 12 -> 1 -> null
sll1.insert(20); // linked list is now: 20 -> 12 -> 1 -> null
sll1.remove(12) // linked list is now: 20 -> 1 -> null
sll1.deleteAtHead() // linked list is now: 1 -> null
console.log(sll1)

