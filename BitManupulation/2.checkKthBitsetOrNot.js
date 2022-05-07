//check kth bit set or not means on that bit one is present or not

function checkKthBit(n,k){
        let i=1 // 1 is shifted to left side kth times
         i= i<<k;
         console.log(i); 
        let res = n&i;
        if(res==0){
                console.log("kth bit is presnet",res);
        }else{
            console.log("kth bit is not presnet",res);
        }
}
let num = 27;
let kthBit = 2
checkKthBit(num,kthBit);
/**
 * n=27  -- 1 1 0 1 1
 * k=2  --- 0 0 1 0 0 and 
 * &ope--   0 0 0 0 0     res==0 it mians at kth bit one is not presnet and it is true
 * 
 */