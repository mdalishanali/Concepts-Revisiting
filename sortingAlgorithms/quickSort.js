function quickSort(arr, start, end) {
  if (start >= end) {
    return;
  }
  let index = partition(arr, start, end);
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}

function partition(arr, start, end) {
  let pivot = arr[start];
  let left = start;
  let right = end;
  while (left < right) {
    while (arr[left] <= pivot && left < end) {
      left++;
    }
    while (arr[right] > pivot && right > start) {
      right--;
    }
    if (left < right) {
      swap(arr, left, right);
    }
  }
  swap(arr, right, start);
  return right;
}
function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

let arr = [3, 5,5,8,71, 8];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log(arr);

/**
 *
 * Like Merge Sort, QuickSort is a Divide and Conquer algorithm.
 * It picks an element as
 * pivot and partitions the given array around the picked pivot.
 * There are many different versions of quickSort that pick pivot in different ways.
 * Worst complexity: n^2
 */
/**
 * Although the worst case time complexity of QuickSort is O(n2) which
 *  is more than many other sorting algorithms like Merge Sort and Heap Sort,
 *  QuickSort is faster in practice, because its inner loop can be efficiently
 * implemented on most architectures, and in most real-world data. QuickSort can
 * be implemented in different ways by changing the choice of pivot, so that the
 *
 * worst case rarely occurs for a given type of data. However, merge sort is generally
 *  considered better when data is huge and stored in external storage.
 */
