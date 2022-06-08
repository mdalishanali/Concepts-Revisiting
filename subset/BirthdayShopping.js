let n = 4;
let k = 2;
let arr = [];
for (let i = 1; i <= n; i++) {
  arr.push(i);
}
console.log(arr);
function BirthdayShop(arr, k) {
    function generateSubset(arr, k, subset, index) {
      let ans = [];
    if (index == arr.length) {
      if (subset.length == k) {
          //subset.sort((a,b)=>a-b)
          ans.push(subset);
          console.log(ans);
      }
      return;
    }
    generateSubset(arr, k, subset, index + 1);
    subset.push(arr[index]);
    generateSubset(arr, k, subset, index + 1);
    subset.pop();
    return;
  }
  generateSubset(arr, k, [], 0);
}
arr = arr.sort((a, b) => a - b);
BirthdayShop(arr, k);
