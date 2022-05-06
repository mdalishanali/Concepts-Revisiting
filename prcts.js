function quickSort(arr, start, end) {
  //quick sort
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
    while (arr[right] >= pivot && right > start) {
      right--;
    }
    if (left < right) {
        console.log(left,right);
      swap(arr, right, left);
    }
  }
  console.log(right);
  return right;
}
function swap(arr, left, right) {
  [arr[left], arr[right]] = [arr[right], arr[left]];
}
let x = [1, 5, 41, 5, 14, 4];
let res = quickSort(x, 0, x.length - 1);
console.log(x);
