/**A is a subset of a set B if all elements of A are also elements of B
 * A set is subset if all the elem of that set is available to its parent
 * count of subset --2**n
 * 
 *    //to print all the non empty subset
    // if(subset.length!==0){
    //     console.log(subset);
    // }
    O/p
[] 
[ 2 ] 
[ 1 ] 
[ 1, 2 ]
--------
 */
/**Complexity Analysis
Here we are generating every subset using recursion. 
The total number of subsets of a given set of size n = 2^n.

Time Complexity :  O( 2^n)

Space Complexity :  O(n) for extra array subset. */
function generateSubset(arr, index, subset) {
  if (index == arr.length) {
    console.log(subset);

    return;
  }
  generateSubset(arr, index + 1, subset);
  subset.push(arr[index]);
  generateSubset(arr, index + 1, subset);
  subset.pop();
  return;
}
let arr = [1, 2];
let index = 0;
let subset = [];
arr.sort((a, b) => a - b);
generateSubset(arr, index, subset);

/**
 * Could the solution set contain duplicate subsets? (Ans: No)
Can we print the subset in any order? (Ans: Yes)
 */

/**
 * Solution steps
We could just build up the subset of different size in an array i.e. subset[]. 
Here are the steps to generate it:

Choose one element from input i.e. subset[len] = S[pos]. We can decide to
 include it in current subset or not.

Recursively form subset including it i.e. allSubsets(pos+1, len+1, subset)
Recursively form subset excluding it i.e. allSubsets(pos+1, len, subset)
subset.pop()
Make sure to generate each set once.
 */
