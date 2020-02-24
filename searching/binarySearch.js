function binarySearch(arr, num) {
  let lowIndex = 0
  let highIndex = arr.length - 1

  while (lowIndex < highIndex) {
    let middleIndex = Math.floor((highIndex+lowIndex)/2)

       
    if (arr[middleIndex] === num) {
      return true
    } else if (num < arr[middleIndex]) {
      highIndex = middleIndex
    } else if (num > arr[middleIndex]) {
      lowIndex = middleIndex
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 70))
