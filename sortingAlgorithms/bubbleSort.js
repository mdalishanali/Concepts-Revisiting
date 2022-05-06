/**
 * Bubble sort is a sorting algorithm that compares two
 * adjacent elements and swaps them until they are not in the sorted .
 */

/**
 * i=0;j=1 || j==3
 * - [3, 0,5, 9, 8];
 /**[3, 0,5, 8, 9];
  * i==1,j=0 j==3
  * *[0, 3,5, 8, 9];
  * i==2
  * [0, 3,5, 8, 9];
  */

let arr = [3, 5, 0, 9, 8];
//let arr = ["a", "i", "o", "p"];
let n = arr.length;
function bubbleSort(arr, n) {
  for (let i = 0; i < n - 1; i++) {
    let swap = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swap = true;
      }
    }
    if (swap == false) {
      break;
    }
  }
  console.log(arr);
}
bubbleSort(arr, n);
/**n==6 
 * ---INDEX----
 * i==5  j=0
 * i==4   j=1
 * i==3 j=2
 * i==2  j=3
 * i=1  j=4
 * i=0  j=5
And did I understood n-i-1 correctly? Is it meant to skip the comparison 
of last item in array, because we don't have element after him?  */
/**The above function always runs O(n^2) time even if the array is sorted.
 *  It can be optimized by stopping the algorithm if the inner loop didn’t cause any swap.
 */
/**
 * Worst complexity: n^2
Average complexity: n^2
Best complexity: n
Space complexity: 1
Boundary Cases: Bubble sort takes minimum time (Order of n) when elements are already sorted.
 */

/**
 * Example: 
First Pass: 
( 5 1 4 2 8 ) –> ( 1 5 4 2 8 ), Here, algorithm compares the first two elements, and swaps since 5 > 1. 
( 1 5 4 2 8 ) –>  ( 1 4 5 2 8 ), Swap since 5 > 4 
( 1 4 5 2 8 ) –>  ( 1 4 2 5 8 ), Swap since 5 > 2 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ), Now, since these elements are already in order (8 > 5), algorithm does not swap them.
Second Pass: 
( 1 4 2 5 8 ) –> ( 1 4 2 5 8 ) 
( 1 4 2 5 8 ) –> ( 1 2 4 5 8 ), Swap since 4 > 2 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –>  ( 1 2 4 5 8 ) 
Now, the array is already sorted, but our algorithm does not know if it is completed. The algorithm needs one whole pass without any swap to know it is sorted.
Third Pass: 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
( 1 2 4 5 8 ) –> ( 1 2 4 5 8 ) 
 */
