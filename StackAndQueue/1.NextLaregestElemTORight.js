//NEXT LARGET ELEM
//NEXT GREATEST ELEM TO THE RIGHT
{
    let arr = [1,3,2,4];
    //o/p===[3,4,4,-1]
    //but we are using stack and running reverse loop then we also get ans in reverse
    // ans === [-1,4,4,3]
    function NextLargestElemToRight(arr){
        let stack = [];
        let ans = [];
       for(let i=arr.length-1; i>=0; i--){
           while(stack.length>0 && stack[stack.length-1]<=arr[i]){
               stack.pop()
           }
           if(stack.length==0){
               ans.push(-1);
           }else{
               ans.push(stack[stack.length-1]);
           }
           stack.push(arr[i])
       }
       console.log(ans.reverse().join(" "));
    }
    NextLargestElemToRight(arr);
}


{
    let arr = [1,30,80,70,2,4];
//o/p =[3,4,4,-1];
for(let i=0; i<arr.length; i++){
    let flag =false;
    for(let j=i+1; j<arr.length; j++){
        if(arr[j]>arr[i]){
            arr[i]=arr[j];
            flag=true
            break;
        }
    }
    if(flag==false){
        arr[i]=-1
    }
}
arr[arr.length-1]=-1;
console.log(arr);
}