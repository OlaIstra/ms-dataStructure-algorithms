
function swap(arr, idx1, idx2){
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function selectionSort(items) {
  let len = items.length,
    min;
 
  for (let i=0; i < len; i++){
    // set minimum to this position
     min = i;
    //check the rest of the array to see if anything is smaller
    for (j=i+1; j < len; j++){
      if (items[j] < items[min]){
        min = j;
      }
    }
    //if the minimum isn't in the position, swap it
    if (i != min){
      swap(items, i, min);
    }
  }
  return items;
}
selectionSort([6,1,23,4,2,3]); // [1, 2, 3, 4, 6, 23]

//Time Complexity: O(n2)
//Space Complexity: O(1)
