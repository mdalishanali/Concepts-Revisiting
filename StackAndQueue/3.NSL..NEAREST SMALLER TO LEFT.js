{
    function NearestSmallerToLeft(arr,n){
        let stack=[];
        let ans = [];
        for(let i=0; i<n; i++){
            while(stack.length!==0 && stack[stack.length-1]>=arr[i]){
                stack.pop();
            }
            if(stack.length==0){
                ans.push(-1);
            }else{
                ans.push(stack[stack.length-1])
            }
            stack.push(arr[i]);
        }
        console.log(ans)
    }
    let arr = [4,5,2,10,8];
    //o/p=[-1,4,-1,2,2]
    let n = arr.length;   
    NearestSmallerToLeft(arr,n);
}


{
    //brute force
    let n = 5;
    for(let i=0; i<n; i++){
        for(let j = i-1; j>=0; j--){

        }
    }
}