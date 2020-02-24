function HashTableDouble(size) {
  this.size = size
  this.limit = 0
  this.keys = this.initArr(size)
  this.values = this.initArr(size)
}

HashTableDouble.prototype.initArr = function(size) {
 const arr = []
 for (i = 0; i < size; i++) {
   arr.push(null)
 }
 return arr
}

HashTableDouble.prototype.hash = function(key) {
  return  this.secondHash(key % this.size)
}

HashTableDouble.prototype.secondHash = function(hashedKey) {
  const R = this.size - 2;
  return R - hashedKey % R;
}

HashTableDouble.prototype.put = function(key, value) {  

  if (this.limit > this.size) throw "HashTable is full"

  const hashedIdx = this.hash(key)

  while (this.keys[hashedIdx] !== null) {
    hashedIdx++
    hashedIdx = hashedIdx % this.size
  }

  this.keys[hashedIdx] = key
  this.values[hashedIdx] = value

  this.limit++
}

HashTableDouble.prototype.get = function(key) {
  const hashedIdx = this.hash(key)

  while (this.keys[hashedIdx] !== key) {
    hashedIdx++
    hashedIdx = hashedIdx % this.size
  }

  return this.values[hashedIdx]
}

const hashDouble = new HashTableDouble(11)
hashDouble.put(7, 'hi')
console.log(hashDouble)
