function commonElems(kArr) {
  let hashTable = {}
  let result = []

  kArr[0].forEach( elem => {
    hashTable[elem] = [0]      
  })

  for (let i = 1; i < kArr.length; i++) {
    kArr[i].forEach( elem => {
      if (hashTable[elem]) {
          hashTable[elem] = hashTable[elem].concat(i)
      }
    })
  }

  for (key in hashTable) {
    if (hashTable[key].length === kArr.length) {
      result.push(parseInt(key))
    }
  }

  return result
}

commonElems([[1 ,2 ,3 ],[1 ,2 ,3 ,4 ],[1 ,2 ]])
