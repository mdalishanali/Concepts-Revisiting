/**Implement GCD Ended
Description

Implement the GCD Function using recursion. Given two integers a and b, find the greatest common divisor of a and b.

The approach which uses logarithmic time complexity is expected here.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains two integers a and b (1 ≤ a, b ≤ 1000000000).


Output
For each test case, print the answer: GCD of the two numbers.


Sample Input 1 

2
6 9
2 25
Sample Output 1

3
1 */

let ans = ImplementGCD(6,9);;
ImplementGCDIterative(6,9)
console.log(ans);
function ImplementGCD(a,b){
    if(a==0) return b;
    return ImplementGCD(b%a,a);
}

function ImplementGCDIterative(a,b){
    while(b!==0){
         let r =b%a;
        //  a=b;
        // b=r;
    }
    console.log(a);
}