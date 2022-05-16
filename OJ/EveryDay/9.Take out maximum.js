/**ake out maximum Ended
Description

Given an array of integers and a number k, find the maximum sum of a subarray of size k.


Input
Input Format

First line consists of two integers n and k separated by space

Second line consists of n integers separated by spaces.

Constraints

1 <= n <= 10^7

1 <= k <= 10^6


Output
Print the maximum sum of a subarray of size k.


Sample Input 1 

10 3
-1 -1 -2 1 -2 4 1 9 3 9
Sample Output 1

21 */

//approach 1===gen all the subarray and then find maxSUm
//O(n^2)
function maxSumofSubarrSizek(arr,n,k){
    let maxSum=0;
    for(let i=0; i<=n-k; i++){
        let sum=0;
        for(let j=i; j<i+k; j++){
                sum+=arr[j];
        }
        if(sum>maxSum) maxSum=sum;
    }
    console.log(maxSum);
}


//approach 2 ==== using sliding window technique
function subarraySumK(arr,n,k){
    let sum=0;
    let maxSUm=0;
    //O(k+n)
    for(let i=0; i<k; i++){
        sum+=arr[i];
    }
    maxSUm=sum;
    for(let j=k; j<n; j++){
        sum+=arr[j];
         console.log(j);
        sum-=arr[j-k];
        console.log([j-k,j,k]);

        if(sum>maxSUm) maxSUm=sum;
    }
    console.log(maxSUm);
}
let arr = [
    -1, -1, -2, 1, -2,
     4,  1,  9, 3,  9
  ];
  let n = arr.length;
  let k= 3
subarraySumK(arr,n,k);
maxSumofSubarrSizek(arr,n,k)