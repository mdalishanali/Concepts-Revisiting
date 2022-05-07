/**Binary Representation of a Number
Write a program to print Binary representation of a given number.

Sample Input
N = 7
Sample Output
00000000000000000000000000000111 */
//=============
/**Expected Time Complexity
O(1), constant time complexity

Expected Space Complexity
O(1), constant space complexity */
//USEING BITWISE OPERATOR
function BinaryReprstnBitwiseOperator(num) {
  let ans = "";
  for (let i = num; i >= 0; i--) {
    if (num & (1 << i)) {
      ans += 1;
    } else {
      ans += 0;
    }
  }
  console.log(ans);
}
let num = 9;
BinaryReprstnBitwiseOperator(num);

function BinaryRepSimple(num) {
    let ans = new Array(2).fill(0).join("")
//   let ans = "";
let count=0;
  while (num > 0) {
    count++;
    let temp = num % 2;
    ans += temp;
    num = Math.floor(num / 2);
  }
  console.log(ans);
  console.log(count);
}
BinaryRepSimple(9);
