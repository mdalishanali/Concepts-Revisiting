for(let i=0; i<4; i++){
    setTimeout(()=>{
        console.log(i);
    },2000)
}
//outpu is = 0,1,2,3 bcz it creates closure and take the i value in the closure
//task queue se call stack me code tabi jata hain ---kab call stack khali ho jata hain
for(var j=0; j<5; j++){
    setTimeout(()=>{
        console.log(j);
    },2000)
}
//bcz i==become ==5- it print 5 times 5 

//now the question is that make var result qual to let res

for(var i=0; i<5; i++){
    //basically create closure
    //actuallly that i become function scope and can not mutate
    ((i)=>{
       setTimeout(()=>{
           console.log(i);
       },2000)
    })(i);
}