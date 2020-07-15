function merge(leftA, rightA){
  let results= [], leftIndex= 0, rightIndex= 0;
  
  while (leftIndex < leftA.length && rightIndex < rightA.length) {
    if( leftA[leftIndex]<rightA[rightIndex] ){
      results.push(leftA[leftIndex++]);
    } else {
      results.push(rightA[rightIndex++]);
    }
  }
  const leftRemains = leftA.slice(leftIndex),
  rightRemains = rightA.slice(rightIndex);

  // add remaining to resultant array
  return results.concat(leftRemains).concat(rightRemains);
}

function mergeSort(array) {
 if(array.length<2){
  return array; // Base case: array is now sorted since it's just 1 element
 }
 
 const midpoint = Math.floor((array.length)/2),
 leftArray = array.slice(0, midpoint),
 rightArray = array.slice(midpoint);

 return merge(mergeSort(leftArray), mergeSort(rightArray));
}
console.log(mergeSort([6,1,23,4,2,3])) // [1, 2, 3, 4, 6, 23]
//Time Complexity: O(nlog2(n))
//Space Complexity: O(n)

function merging(a1, a2) {
  const result = [];

  while (a1.length > 0 && a2.length > 0) {
    if (a1[0] < a2[0]) {
      result.push(a1.shift());
    } else {
      result.push(a2.shift());
    }
  }

  return result.concat(a1, a2);
}

function mergeSort1(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const length = arr.length;
  const middle = Math.floor(length / 2);

  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length);

  return merging(mergeSort(left), mergeSort(right));
}

console.log(mergeSort([3, 5, 2, 8, 1, 9, 2, 0]));
