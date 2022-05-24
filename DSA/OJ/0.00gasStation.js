let  gas=  [7,1,0,11,4];
let cost = [5,9,1,2,5];
// let gas=[ 1, 2, 3, 4, 5 ]
// let cost =  [ 3, 4, 5, 1, 2 ]
let ans = gastStationBr(gas,cost);
let m = optimize(gas,cost);
console.log(m);
console.log(ans)
//brute force
function gastStationBr(gas,cost){
    for(let i=0; i<gas.length; i++){
        let tank=0, possible=true;
        for(let j=i; j<gas.length+i; j++){
            let station = j%gas.length;
            tank=tank+gas[station]-cost[station];
            console.log(tank)
            if(tank<0){
                possible=false;
                break;
            }  
        }
        if(possible==true){
            console.log(i);
            return i;
        }
    }
    return -1;
}
//tc--O(n^2)
//sc--O(1)

function optimize(gas,cost){
   let tank=0, total=0, index=0;
   let n = gas.length;
   for(let i=0; i<n; i++){
       let consume = gas[i]-cost[i];
       tank+=consume;
       console.log(tank);
       console.log(index);
       if(tank<0){
           index=i+1;
           tank=0;
       }
       total+=consume;
   }
   return total<0?-1:index;
   console.log(total);
}