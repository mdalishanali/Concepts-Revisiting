/**Given an integer N. Check whether N is prime or not.
 * Sample Input
input: N = 10
Sample Output
Output: No
 * 
 */
/**Expected Time Complexity
O(sqrt{N})

Expected Space Complexity
O(1), i.e., constant space complexity.

Constraints
1 <= N <= 1000000000 */
/**Prime number means that number is divisible by itself and 1 */
//===================================================================
/**A prime number N, is only divisible by 1 and
 * itself. 2, 3, 5, 7, 11, 13, ... are first few prime numbers.
 */
function checkPrime(num) {
  if (num <= 1) {
    console.log("NO");
    return;
  }
  //let m = Math.sqrt(7);//2.6457513110645907
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) {
      console.log("NO");
      return;
    }
  }
  console.log("YES");
}
let num = 9;
checkPrime(num);


/**
 * Time Complexity
O(sqrt{N})
 Space Complexity
O(1), i.e., constant space complexity.
 */