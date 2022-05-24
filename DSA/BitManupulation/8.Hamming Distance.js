function runProgram(input) {
    input = input.split("\n");
     let tc = input[0]*1;
     let line = 1;
     for(let i=0; i<tc; i++){
         let arr = input[line++].split(" ").map(Number);
         find(arr);
     }
 
 }
 /**Sample Input 1 

2
15 7
0 3
Sample Output 1

1
2 */
 const find = (arr)=>{
     /*
     The Hamming distance between two integers
     is the number of positions at which the corresponding bits are different.*/
     let x = arr[0]^arr[1];
     let count=0;
     while(x>0){
         count+=x&1;
         x>>=1;
     }
     console.log(count);
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