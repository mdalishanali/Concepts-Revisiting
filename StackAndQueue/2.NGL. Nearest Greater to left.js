function NextLargerELmToLeft(arr,n){
    let stack=[];//1
    let ans = [];
    for(let i=0; i<n; i++){
        while(stack.length!==0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length==0){
            ans.push(-1);
        }else{
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i]);
    }
    console.log(ans);
}
let arr = [1,3,2,4];
let n = arr.length;
NextLargerELmToLeft(arr,n);
//o/p--[-1,-1,3,-1]
//1. i=0 -n;
//

{
    //brute force
    for(let i=0; i<n; i++){
            let flag=false;
        for(let j=i-1; j>=0; j--){
            //so on continue
            if(arr[j]>=arr[i]){
                console.log(arr[i],arr[j]);
                arr[i]=arr[j];
                flag=true;
                break;
            }
        }
        if(flag==true){
            arr[i]=-1;
        }
    }
    arr[0]=-1;
    console.log(arr);

}