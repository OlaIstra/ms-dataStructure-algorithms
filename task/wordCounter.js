function wordCount(sentence) {
  let hashtable = {}

  let sArr = sentence.replace(/[.]/g, '').split(" ")

  sArr.forEach(word => {      //O(sentenceLength)  = O(N)
    if (!hashtable[word]) {
      hashtable[word] = 1
    } else {
      hashtable[word]++
    }
  })

  // make Array from Hashtable
  let arr = []

  for (let prop in hashtable) {   //O(hashLength)  = O(N)
    arr.push([hashtable[prop], prop])
  }

  function sortArr(a,b) {
    return b[0] - a[0]
  }

  arr.sort(sortArr) //  O(nlog2(n))

  let result = {}

  arr.forEach(elem => {   //O(arrLength)  = O(N)
    result[elem[1]] = elem[0]
  })
  
  return result
}

console.log(wordCount("practice makes perfect. get perfect by practice. just practice"))

//Time Complexity: O(nlog2(n))
//Space Complexity: O(n)
