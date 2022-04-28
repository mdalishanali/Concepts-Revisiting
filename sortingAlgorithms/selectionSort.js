let arr = [3, 5, 0, 9, 8];
let n = arr.length;
/**
 * [3, 5, 0, 9, 8];
 * [0, 3, 5, 9, 8];
   [0, 3, 5, 8, 9] 
 */

function selectionSort(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  console.log(arr);
}
selectionSort(arr, n);
/**
 * The selection sort algorithm sorts an array by repeatedly finding the 
 * minimum element (considering ascending order) from unsorted part and
 * putting it at the beginning. The algorithm maintains two subarrays in a given array.

 */
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    if (arr[i] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
  }
}
console.log(arr);
/**
 * Time Complexity: O(n2) as there are two nested loops.
Auxiliary Space: O(1) 
The good thing about selection sort is it never makes more than
 O(n) swaps and can be useful when memory write is a costly operation. 
 */
