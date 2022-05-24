function mostActive(customers) {
    let obj = {};
    let n = customers.length;
    for(let i=0; i<customers.length; i++){
        let char = customers[i];
         if(obj[char]==undefined){
             obj[char]=1;
         }else{
             obj[char]+=1
         }
         
    }
   console.log((obj));
   let marks = (5*customers.length);
   marks = marks/100;
   marks = Math.floor(marks)
   console.log(marks);
   let ans = [];
    for(let x in obj){
        if(obj[x]>=marks){
            ans.push(x);
        }else{
            continue;
        }
    }
    console.log(ans)
    ans = ans.sort((a,b)=>a-b);
    ans = ans.sort()
    console.log(ans);
    let res = "";
    for(let i=0; i<ans.length; i++){
    console.log(ans[i])
      res+=ans[i]+" ";
    }
    return res
 }
 
let arr =["Omega",  
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Alpha",
    "Omega",
    "Beta"]
 let ans = mostActive(arr);
 console.log(ans)


 let percentage = Math.floor(10/23*100);
 console.log(percentage);

 let marks = (43*23)/100;
 console.log(marks);