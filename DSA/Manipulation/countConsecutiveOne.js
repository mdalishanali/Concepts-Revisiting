let arr=[1, 0, 0, 1, 1, 0, 1];
let k = 1;
let a = countConsecutiveOne(arr,k);
console.log(a);//sliding window approach
function countConsecutiveOne(arr,k){
    let maxConsecutiveOne = 0;
    let start = 0;
    let zeroCount = 0;
    for(let end = 0; end<arr.length; end++){
        if(arr[end]==0){
            zeroCount++;
        }
        while(zeroCount>k){
            if(arr[start]==0){
                    zeroCount--;
            }
            start++;
        }
        maxConsecutiveOne = Math.max(maxConsecutiveOne,end-start+1);
    }
    return maxConsecutiveOne;


}