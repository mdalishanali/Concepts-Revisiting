function nextHighestpower(n) {
    if(n&&(n&(n-1))==0){
        console.log(n*2);
    }else{
        let count = 0;
        while(n>0){
        count++;
        console.log(n);
         n=Math.floor(n/2);
        }
        console.log(count);
        console.log(1<<count);
       // console.log(Math.pow(2,count));
    }
   
}


nextHighestpower(7);
/**
 * n=17 -- 10001 --- 5 bits
 */