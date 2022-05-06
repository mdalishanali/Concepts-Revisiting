/**
 * find the count of subset which has every subset has k odd elem
 *
 */

function kOddSubset(arr, n, k) {
  let count = 0;
  function generateSubset(arr, n, k, subset, index) {
    if (index == n) {
      // console.log(subset);
      let oddCount = 0;
      if (subset.length !== 0) {
        for (let i = 0; i < subset.length; i++) {
          if (subset[i] % 2 !== 0) {
            oddCount++;
            if (oddCount >= k) {
              count++;
            }
          }
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
  console.log(count);
}

let arr = [4, 3, 2, 1];
let n = arr.length;
let k = 2;
kOddSubset(arr, n, k);
