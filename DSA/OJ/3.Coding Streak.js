/**Coding Streak Ended
Description

For last N days, you did nothing but eat, sleep and code.

A close friend of you kept an eye on you for the last N days. For every single minute of the day, he kept track of your actions and prepared a log file.

The log file contains exactly N lines, each line contains a string of length 1440 ( i.e. the number of minutes in 24 hours of the day).

The string is made of characters E, S, and C only; representing Eat, Sleep and Code respectively. the ith character of the string represents what you were doing during the ith minute of the day.

Your friend is now interested in finding out the maximum of the longest coding streak of the day - X.

He also wants to find the longest coding streak of N days - Y.

Coding streak means the number of C's without any E or S in between.

See sample test case for clarification.


Input
Input Format

First line of each file contains N - number of days.

Following N lines contains a string of exactly 1440 length representing his activity on that day.

Constraints

1 ≤ N ≤ 365

The string consists of characters E, S, and C only.

String length is exactly 1440.

Note: The sample test case does not follow the given constraints on string length to avoid large data. It is meant only for explanation. We assure you that the hidden test files strictly follow the constraints.


Output
Print X and Y separated by a space in a single line.


Sample Input 1 

4
SSSSEEEECCCCEECCCC
CCCCCSSSSEEECCCCSS
SSSSSEEESSCCCCCCCS
EESSSSCCCCCCSSEEEE
Sample Output 1

7 9
Hint

Sample 1 Explanation

Longest coding streak for each day is as follows:

Day 1: 4

Day 2: 5

Day 3: 7

Day 4: 6

Maximum of these is 7, hence X is 7.

Now in order to find the longest coding streak of all days, we should also check if you continued your coding from previous days.

As in the sample test case, you were coding for 4 minutes at the end of Day 1 and you continued to code till 5 more minutes on Day 2. Hence the longest coding streak is 4+5 equals 9. There is no any other coding streak larger than this. So the longest coding streak of all days is 9. */



function runProgram(input) {
    input = input.split("\n");
     let  n = +input[0];
     let mat = [];
     let line = 1;
     for(let i=0; i<n; i++){
         let arr = input[line++].split("")
         mat.push(arr);
     }
     codingStreak(mat,n);
 
 }
 
 function codingStreak(mat,n){
    let day =0;
    let matCount =0;
    let ans = 0;
    for(let i=0; i<n; i++){
        let count = 0;
        for(let j=0; j<mat[0].length; j++){
            if(mat[i][j]=="C"){
                count++;
                matCount++;
                if(matCount>ans){
                    ans=matCount;
                }
                
                if(count>day){
                    day=count;
                }
            }else{
                count=0;
                matCount=0;
            }
        }
    }
    console.log(day,ans)
 }
 
 
 if (process.env.USERNAME === "") {
     runProgram(``);
 } else {
     process.stdin.resume();
     process.stdin.setEncoding("ascii");
     let read = "";
     process.stdin.on("data", function (input) {
         read += input;
     });
     process.stdin.on("end", function () {
         read = read.replace(/\n$/, "");
         read = read.replace(/\n$/, "");
         runProgram(read);
     });
     process.on("SIGINT", function () {
         read = read.replace(/\n$/, "");
         runProgram(read);
         process.exit(0);
     });
 }