var array1 = [12, 3, 13, 4, 2, 40, 23];

function getKthBiggestElement(array, k) {
    var maxH = new MaxHeap();
    for (var i = 0, arrayLength = array.length; i < arrayLength; i++) {
        maxH.push(array[i]);
    }
    for (var i = 1; i < k; i++) {
        maxH.pop();
    }
    return maxH.pop();
}
getKthBiggestElement(array1, 2); // 23
getKthBiggestElement(array1, 1); // 40
getKthBiggestElement(array1, 7); // 2
