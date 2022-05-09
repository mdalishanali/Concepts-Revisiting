{
    function NearestSmallerToRight(arr,n){
        let stack=[];
        let ans = [];
        for(let i= n-1; i>=0; i--){
            while(stack.length>0 && stack[stack.length-1]>arr[i] ){
                stack.pop();
            }
            if(stack.length==0){
                ans.push(-1);
            }else{
                ans.push(stack[stack.length-1]);
            }
            stack.push(arr[i])
        }
        console.log(ans.reverse().join(" "))
    }
    let arr = [4,5,2,10,8];
    let n = arr.length;
    NearestSmallerToRight(arr,n);
}


{
    let n;
    for(let i=0; i<n; i++){
        for(let j = i+1; j<n; j++){

        }
    }
}