/**K even subset
 * Given an array A having N positive integers. Count the number of non-empty subsets of array A 
 * such that each subset has at least K even numbers.
Sample Input 1 

2
4 2
4 3 2 1
2 1
2 3
Sample Output 1
4
2
Hint

Given test cases:

Test case 1:

N = 4, K = 2, A: [ 4, 3, 2, 1 ].
Subsets which has at least two even numbers are:
{ 4,3,2,1 }, { 4, 3, 2 }, { 4, 2 },{4, 2, 1}.
Test case 2:

N = 2, A: [ 2, 3 ].
Subsetswhich has at least one even number are:
{2}, {2, 3}.

 */
let arr = [4, 3, 2, 1];
let n = arr.length;
let k = 2;
//subset had atleast k even no
function KEvenSubset(arr, n, k) {
  let count = 0;
  function generateSubset(arr, n, k, subset, index) {
    if (index == n) {
      if (subset.length !== 0) {
        let evenCount = 0;
        for (let i = 0; i < subset.length; i++) {
          if (subset[i] % 2 == 0) {
            evenCount++;
            if (evenCount >= k) {
              count++;
              //console.log(subset);
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
KEvenSubset(arr, n, k);
