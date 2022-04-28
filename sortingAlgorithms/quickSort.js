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

let arr = [3, 5, 0, 9, 8];
let n = arr.length;
quickSort(arr, 0, n - 1);
console.log(arr.join(" "));
