/**Nearest Smaller Element Ended
Description

You are given an array A of size N. For each element, in the array find the closest element with a smaller value, than the current value. If no such element exists, print -1. If two values are equidistant to the current value, print the one that occurs to the left of it. Refer the sample I/O for better understanding.


Input
The first line contains T, the number of test cases. The first line of each test case contains N, the size of the array.

Next line contains N space separated integers denoting the closest smaller values, or -1, if no such values exist.

Constraints

1 <= T <= 10

1 <= N <= 10^5

1 <= A[i] <= 10^4


Output
For each test case, print N space separated integers, denoting the nearest smaller elements, or -1 if it does not exists, on a new line.


Sample Input 1 

1
8
39 27 11 4 24 32 32 1
Sample Output 1

27 11 4 1 4 24 1 -1 
Hint

In the sample test case, the array has 8 elements. The closest value to the first element 39, which is lesser than it is 27. Similarly, for 27 is 11, for 11 is 4, for 4 is 1, for 24 is 4, for the first instance of 32, the closest value is 24, and for the second instance, the closest value is 1, and for 1, the value is -1, as it has no values lesser than it in the array. */

function NearestSmallerElem(arr,n){
    let res = [];
    for(let i=0; i<n; i++){
        let ans=-1;//i take minus becz if both condn does not become treue it takes -1 by itself
        let diff = n+1;
        for(let j= i-1; j>=0; j--){
            if(arr[j]<arr[i]){
                ans = arr[j];
                diff = i-j;
                break;
            }
        }
        //traversing the right side
        for(let k=i+1; k<n; k++){
            if(arr[k]<arr[i]){
                let m = k-i;
                if(m<diff){
                    ans = arr[k];
                    break
                }
            }
        }
     res.push(ans);
    }
    console.log(res.join(" "))
}
let arr = [39 ,27 ,11, 4 ,24 ,32 ,32 ,1];
let n = arr.length;
NearestSmallerElem(arr,n);
//o/p:--39 27 11 4 24 32 32 1


{
    //you can optimize this code using stack 
}
