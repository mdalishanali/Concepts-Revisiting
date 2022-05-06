let arr = [3, 34, 4, 12, 5, 2];
let n = arr.length;
let k = 9;

function subsetSum(arr, n, k) {
  function generateSubset(arr, n, k, subset, index) {
    let sum = 0;
    if (index == n) {
      if (subset.length !== 0) {
        for (let i = 0; i < subset.length; i++) {
          sum += subset[i];
        }
        if (sum == k) {
          console.log(subset);
          
        }
      }
      return;
    }
    generateSubset(arr, n, k, subset, index + 1);
    subset.push(arr[index]);
    generateSubset(arr, n, k, subset, index + 1);
    subset.pop();
    return;
  }
  generateSubset(arr, n, k, [], 0);
}
subsetSum(arr, n, k);
