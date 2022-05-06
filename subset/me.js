function runProgram(input) {
    input=input.split("\n");
    let n=+input[0];
   let arr=input[1].split(" ").map(Number);
   let k=+input[2];
    check(arr,n,k);
 }
 function check(arr,n,k){
     let sub=[];
     let index=0;
     let last="False"
     function subset(arr,sub,index){
        
         if(sub.length==k){
             if(find(sub)==true){
                 last="True"
             }
         }
         if(index==arr.length){
             return;
         }
         for(let i=index;i<arr.length;i++){
             sub.push(arr[i]);
             subset(arr,sub,++index);
             sub.pop();
         }
         
        
     }
    subset(arr,sub,index);
    console.log(last);
    
    function find(ans){
        
        let a=[];
        for(let i=0;i<ans.length;i++){
            flag=true;
            for(let j=0;j<a.length;j++){
                if(ans[i]==a[j]){
                    flag=false;
                }
                
            }
            if(flag==true){
                a.push(ans[i]);
            }
        }
        
        if(a.length==1){
            return true;
        }else{
            return false
        }
        
    }
      
     
     
 }
if (process.env.USER === "") {
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