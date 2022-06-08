let str = "i.like.this.program.very.much";
let ans = str.split(".");
let res = "";
for(let i=ans.length-1; i>=0; i--){
    res+=ans[i];
    if(i!==0){
        res+="."
    }
    
}
console.log(res);