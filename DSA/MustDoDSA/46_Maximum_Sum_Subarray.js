let arr = [2, -3, 4, -1, -2, 1, 5, -3];
function maxContiSubArraySum(arr){
    let sum=0;
    let maxSum=-Infinity;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        if(sum>maxSum) maxSum=sum;
        if(sum<0) sum=0;
    }
    console.log(maxSum);
}
maxContiSubArraySum(arr);

/**## **MAXIMUM SUM SUBARRAY**
Given an one dimensional array of size N having both positive
 and negative integers. Find the sum of subarray such that it has 
 the largest sum among all subarrays.

#### **Sample Input**
	array = [2, -3, 4, -1, -2, 1, 5, -3]

#### **Sample Output**
	Output: 7

#### **Sample Explanation**
The subarray → [4, -1, -2, 1, 5] gives sum 7 which is the largest sum
 among all subarrays. Hence the answer is 7.

#### **Expected Time Complexity**
__O__(N), where N is the size of the array

#### **Expected Space Complexity**
__O__(1), i.e., constant space complexity.

#### **Constraints**
	1 <= N <= 100000
	-100000 <= Array element <= 100000 */