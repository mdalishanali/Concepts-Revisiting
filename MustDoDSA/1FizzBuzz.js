/**
 * Fizz Buzz
Given an integer N. Print the numbers from 1 to N and for multiples of ‘3’ 
print “Fizz” instead of the number,
 for the multiples of ‘5’ print “Buzz” and for multiples of both 5 and 3 print "FizzBuzz"
 Sample Input
input: N = 10
Sample Output
Output: 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz
 */

function FizzBuzz(n) {
  let ans = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 !== 0) {
      ans += "Fizz" + " ";
      continue;
    } else if (i % 5 == 0 && i % 3 !== 0) {
      ans += "Buzz" + " ";
      continue;
    } else if (i % 3 == 0 && i % 5 == 0) {
      ans += "FizzBuzz" + " ";
      continue;
    } else {
      ans += i + " ";
      continue;
    }
  }
  return ans;
}
let num = 5;
let res = FizzBuzz(num);
console.log(res);

/**
 * TIME COMPLEXITY -- O(N)
 * SPACE COMPLEXIY ----O(1)
 */
