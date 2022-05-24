/**
 * National Award Ceremony Ended
Description

It's December time and it's the time to celebrate all the state winners of various sports and award them with their medals. The medal awarded are either Gold, Silver, or Bronze.

We have an array A of n winners where winners are randomly lined up starting from position 0 to position n-1. The gold players have their value assigned as 0, silver as 1, and bronze as 2.

Here all same medals winners are identical.

Since the medals will be distributed uniformly i.e, first all golds then silver, and then subsequently bronze winners, you need to come up with an algorithm to arrange them in the uniform order so that the ceremony can start quickly as you are the event manager.

Since the government computers are not well equipped with the latest technologies, there are some space and time constraints under which you need to execute this task. (Also the sort function doesn't work since it takes O(nlogn)),

The required time complexity is linear and the required space complexity is constant per testcase.


Input
The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases. Then t test cases follow.

The first line of each test case contains a single integer n (1 ≤ n ≤ 100000).

The second line of the test case contains n integers (0 ≤ Ai ≤ 2).


Output
For each test case, print the answer.


Sample Input 1 

3
1
2
3
2 0 1
4
2 0 2 1
Sample Output 1

2
0 1 2
0 1 2 2
 */

let arr = [2, 0, 2 ,1];
let count0=0;
let count1=0;
let count2=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]==0){
        count0++;
    }else if(arr[i]==1){
        count1++
    }else{
        count2++;
    }
}
let ans = [];
for(let i=0; i<count0; i++){
    ans.push(0)
}
for(let i=0; i<count1; i++){
    ans.push(1)
}
for(let i=0; i<count2; i++){
    ans.push(2)
}
console.log(ans.join(" "));