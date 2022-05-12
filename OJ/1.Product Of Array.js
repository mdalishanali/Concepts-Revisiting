
/**Product Of Array Ended
Description

Given a array of N 32 bit integers. You need to find product of array for each i without considering ith element. where 0 <= i <= n-1 . See sample test case for better understanding.

You are not allowed to use division operator. It is given that product will fit in 32 bit integer.


Input
First Line contains T, size number of test cases.

First Line of each test case contains N, size of array.

Second Line of each test case contains N integers, numbers of array.

Constraints

1 <=T<= 10

1 <=N= 10^6

1 <= A[i] <=100


Output
For each test output resulting array on a new line.


Sample Input 1 

2
5
1 2 3 4 5
3
3 2 7
Sample Output 1

120 60 40 30 24
14 21 6
Hint

For test case 1

i = 0 ==> 2*3*4*5 = 120

i = 1 ==> 1*3*4*5 = 60

i = 3 ==> 1*2*4*5 = 40

i = 4 ==> 1*2*3*5 = 30

i = 5 ==> 1*2*3*4 = 24 */

function ProductWithoutDivide(arr,n){
    let pb = [];//[ 1, 1, 2, 6, 24 ]
    let p = 1;
    for(let i=0; i<n; i++){
        pb[i]=p;
        p*=arr[i];
    }
    //now for its time to product above part
    let pa = [];//[ 120, 60, 20, 5, 1 ]
    let m = 1;
    for(let i=n-1; i>=0; i--){
        pa[i]=m;
        m*=arr[i]
    }
    // console.log(pa);

    let ans = [];
    for(let i=0; i<n; i++){
        ans[i]=pa[i]*pb[i];
    }
    console.log(ans.join(" "));
}
let arr=[1,2,3,4,5];
let n = arr.length
ProductWithoutDivide(arr,n);

//time complexity O(n)
//space complexity --O(n);