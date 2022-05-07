function checkPowerofTwo(number) {
    if(number<=1){
        console.log("no");
        return;
    }
    while(number%2==0){
        number=number/2;
        if(number==1){
            console.log("yes");
            return;
        }
    }
    console.log("no");

}
let num=74;
checkPowerofTwo(num);

/**
 * log base 2 n +1 comparision  ~= logbase2N
 */


//====================BITWISE OPERATOR
function bitwisePowerofTwo(n){
    //if we apply and oper to 2"n and 2^n-1===0
    if(n<=1){
        console.log("false");
    }
    if((n&(n-1))==0){
        console.log("true");
        
    }else{
        return false;
    }
}
let n =72;
bitwisePowerofTwo(n);


//TIme complexity 0(1)