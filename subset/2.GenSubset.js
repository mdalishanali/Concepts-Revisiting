let arr = [1];
let n = arr.length;
subset(arr,n,0,[])
function subset(arr,n,index,subans){
    if(subans.length>0){
        console.log(subans);
    }
    for(let i=index; i<n; i++){
        subans.push(arr[i+1]);
        subset(arr,n,index+1,subans);
        subans.pop();
    }
}