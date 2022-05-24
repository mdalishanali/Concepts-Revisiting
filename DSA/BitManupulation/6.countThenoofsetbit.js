//count the number of set bits in a given number
//setbits means no of 1 
function countSetbit(n){
let count=0;
while(n>0){
    if(n&1!==0){
        count++;
    }
    n=n/2;
    // n=n>>1
}
console.log(count);
}
countSetbit(27)
//27 -- 11011
/**
 * 27 --11011
 * & ---00001
 * -----------
 *      00001
 * ------------    
 */