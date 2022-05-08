/**
 * You have a given two number a and b 
 * make it equal using digit sum
 */


function makeEqual(num1,num2){
        while(num1!==num2){
            if(num1<num2){
                let m = DigitSum(num1);
                num1+=m;
            }else if(num1>num2){
                let m = DigitSum(num2);
                num2+=m;
            }
        }
        if(num1==num2){
            console.log("Yes",num1,num2);
        }else{
            console.log("no",num1,num2);

        }
       // console.log("No");
       
}

function DigitSum(a) {
    let sum = 0;
    while(a>0){
        sum+=a%10;//1
        a = Math.floor(a/10)
    }
    return sum;
}
let a = 14;//
let b = 24;
makeEqual(a,b);
//140
//140--s1==  1+4+0==5
//200--s2