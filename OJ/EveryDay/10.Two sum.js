/**
 * Two sum Ended
Description

Given a sorted array of integers, return indices of two numbers such that they add up to a target value.

Print -1 -1 if not found.


Input
First line contains T, number of test cases

Second line contains N and B where N is the size of the array and B is the target sum

1 <= T <= 10

2 <= N <= 1000, 2 <= B <= 3e5

1 <= Ai <= 1e5

it is guaranteed that sum of N over all test cases is at most 1000.


Output
Two values a, b i.e. indexes of any two elements that are found else -1 -1 if not found. Indexing is 0 based indexing. If multiple solutions exist, output the one with the lowest values of a and b.

Note - the answer should print the smaller index first followed by the larger index. The smallest such index pair should be printed.

If we have 2 sorted pairs [a1, b1] and [a2, b2], the first pair is said to be smaller than the second one if a1 < a2 or (a1 == a2 and b1 < b2 )


Sample Input 1 

3
4 9
2 7 11 15
5 10
1 2 3 5 5
2 100
48 49
Sample Output 1

0 1
3 4
-1 -1
 */

let arr = [ 2, 7, 11, 15 ];
let n = arr.length;
let k = 9;
TwoSum(arr,k)
TwoSumPointer(arr,k);
TwoSumObj(arr,k)
function TwoSum(arr,k){
   for(let i=0; i<=n-2; i++){
       
       for(let j=i; j<i+2; j++){
            if(arr[i]+arr[j]==k){
                console.log(i,j);
                break;
            }   
       }
   }
}

function TwoSumPointer(arr,k){
    let n = arr.length;
    let i=0;
    let j = n-1;
    while(i<j){
        let tempSum=arr[i]+arr[j];
        if(tempSum==k){
            console.log(i,j);
            break;
        }else if(tempSum<k){
            i++;
        }else{
            j--;
        }
    }
}

function TwoSumObj(arr,k){
    let numObj= {};
    for(let i=0; i<arr.length; i++){
        let complement = k-arr[i];
        if(numObj[complement]!==undefined){
                console.log(numObj[complement],i)
        }
        numObj[arr[i]]=i;
    }
    console.log(numObj);
}
//O(n)--time complexity ans space also
