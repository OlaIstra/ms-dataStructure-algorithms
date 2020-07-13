function swap(arr, idx1, idx2){
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length-1; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        swap(arr, i, j)
      }
    }
  }
  return arr
}

bubbleSort([6,1,2,5,3,7,4])

//Time Complexity: O(n2)
//Space Complexity: O(1)


function bubbleSort2(arr) {
  let swapped = false
    
  do {
    swapped = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i+1]) {
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
      }
    }
  } while (swapped)
      
  return arr
}
