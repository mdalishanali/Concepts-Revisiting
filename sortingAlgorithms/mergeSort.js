let arr = [3, 5, 0, 9, 8];
let n = arr.length;
mergeSort(arr, 0, n - 1);
console.log(arr.join(" "));

function mergeSort(arr, start, end) {
  //---tree time complexity -- log base 2 N
  if (start >= end) {
    return;
  }
  let mid = Math.floor(start + (end - start) / 2);
  mergeSort(arr, start, mid);
  mergeSort(arr, mid + 1, end);
  merge(arr, start, mid, end);
}

function merge(arr, start, mid, end) {
  ///---------------in this time complexity is N ans space is O (n)
  let leftArray = createArray(arr, start, mid);
  let rightArray = createArray(arr, mid + 1, end);
  let left = 0;
  let right = 0;
  let cur = start;
  while (left < leftArray.length && right < rightArray.length) {
    if (leftArray[left] <= rightArray[right]) {
      arr[cur] = leftArray[left];
      left++;
    } else {
      arr[cur] = rightArray[right];
      right++;
    }
    cur++;
  }

  while (left < leftArray.length) {
    arr[cur] = leftArray[left];
    left++;
    cur++;
  }
  while (right < rightArray.length) {
    arr[cur] = rightArray[right];
    right++;
    cur++;
  }
}
function createArray(arr, start, end) {
  let arr1 = [];
  for (let i = start; i <= end; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
}

//

/**
 * Merge Sort is one of the most popular sorting algorithms 
 * that is based on the principle 
 * of Divide and Conquer Algorithm.

Here, a problem is divided into multiple sub-problems. Each sub-problem 
is solved individually. 
Finally, sub-problems are combined to form the final solution.
 */

/**
 * Merge Sort is useful for sorting linked lists.
 * T.c --- θ(nLogn) 
 * Auxiliary Space: O(n)
Algorithmic Paradigm: Divide and Conquer
Sorting In Place: No in a typical implementation
Stable: Yes
 */
