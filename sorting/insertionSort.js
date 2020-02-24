function insertionSort(arr) {
 let len = arr.length, // number of items in the array
  value, // the value currently being compared
  i, // index into unsorted section
  j; // index into sorted section
 
  for (i=0; i < len; i++) {
    // store the current value because it may shift later
    value = arr[i];
 
    // Whenever the value in the sorted section is greater than the value
    // in the unsorted section, shift all items in the sorted section
    // over by one. This creates space in which to insert the value.

    for (j=i-1; j > -1 && arr[j] > value; j--) {
      arr[j+1] = arr[j];
    }
    arr[j+1] = value;
  }
  return arr;
}
insertionSort([6,1,23,4,2,3]); // [1, 2, 3, 4, 6, 23]
// Time Complexity: O(n2)
// Space Complexity: O(1)
