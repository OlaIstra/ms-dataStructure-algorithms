function HashTableQuadratic(size) {
  this.size = size
  this.limit = 0
  this.keys = this.initArr(size)
  this.values = this.initArr(size)
}

HashTableQuadratic.prototype.initArr = function(size) {
 const arr = []
 for (i = 0; i < size; i++) {
   arr.push(null)
 }
 return arr
}

HashTableQuadratic.prototype.hash = function(key) {
  return key % this.size
}

HashTableQuadratic.prototype.put = function(key, value) {  

  if (this.limit > this.size) throw "HashTable is full"

  const hashedIdx = this.hash(key)
  let squareIndex = 1

  while (this.keys[hashedIdx] !== null) {
    hashedIndex += Math.pow(squareIndex,2)
    squareIndex++
  }

  this.keys[hashedIdx] = key
  this.values[hashedIdx] = value

  this.limit++
}

HashTableQuadratic.prototype.get = function(key) {
  const hashedIdx = this.hash(key)

  while (this.keys[hashedIdx] !== key) {
    hashedIndex += Math.pow(squareIndex, 2)
    hashedIdx = hashedIdx % this.size
    squareIndex++
  }

  return this.values[hashedIdx]
}

const hashQuadratic = new HashTableQuadratic(11)
hashQuadratic.put(7, 'hi')
console.log(hashQuadratic)
