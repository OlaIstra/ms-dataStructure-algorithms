function HashTableQuadratic(size) {
  this.size = size
  this.limit = 0
  this.keys = this.initArr(size)
  this.values = this.initArr(size)
}

HashTableLinear.prototype.initArr = function(size) {
 const arr = []
 for (i = 0; i < size; i++) {
   arr.push(null)
 }
 return arr
}

HashTableLinear.prototype.hash = function(key) {
  return key % this.size
}

HashTableLinear.prototype.put = function(key, value) {  

  if (this.limit > this.size) throw "HashTable is full"

  const hashedIdx = this.hash(key)
  let squareIdx = 1

  while (this.keys[hashedIdx] !== null) {
    hashedIdx += Math.pow(squareIdx, 2)
    squareIdx++
  }

  this.keys[hashedIdx] = key
  this.values[hashedIdx] = value

  this.limit++
}

HashTableLinear.prototype.put = function(key, value) {  

  if (this.limit > this.size) throw "HashTable is full"

  const hashedIdx = this.hash(key)

  while (this.keys[hashedIdx] !== null) {
    hashedIdx += Math.pow(squareIdx, 2)
    hashedIdx = hashedIdx % this.size
    squareIdx++    
  }

  this.keys[hashedIdx] = key
  this.values[hashedIdx] = value

  this.limit++
}

HashTableLinear.prototype.get = function(key) {
  const hashedIdx = this.hash(key)

  while (this.keys[hashedIdx] !== key) {
    hashedIdx += Math.pow(squareIdx, 2)
    hashedIdx = hashedIdx % this.size
  }

  return this.values[hashedIdx]
}

const hashOne = new HashTableQuadratic(11)
hashOne.put(7, 'hi')
console.log(hashOne.get(7))
