/**Famous String Interleaving Problem Ended
Description

Given three strings A, B and C. Checks whether C is an interleaving of A and B. C is said to be interleaving A and B, if it contains all characters of A and B and order of all characters in individual strings is preserved.

In other ways, it can be said as Given three strings A,B and C, comment whether it is possible to make C using characters of string A and B and keeping them in the same order.

For example : aaxaby can be made using aab and axy


Input
Input Format :

First line contains string A

Second line contains string B

Third line contains string C

Constraints :

Length of A,B,C <= 1000


Output
Output "Yes" (without quotes) in case C is interleaved of A and B

Else in all other cases, print "No" (without quotes)


Sample Input 1 

abcd
xyz
axybczd
Sample Output 1

Yes */
//basically if we have to check can we make string c using a and b with maintaing the order
let a = "abcd";
let b = "xyz";
let c = "axybczd";
checkStringIsIntervel(a,b,c)
function checkStringIsIntervel(a,b,c){
   // console.log(a,b,c);
    let m=0;
    let n = 0;
    for(let i=0; i<c.length; i++){
        if(c[i]==a[m]){
            m++;
        }else if(c[i]==b[n]){
            n++;
        }else{
            console.log("No");
            return;
        }
    }
    console.log("YES");

}
