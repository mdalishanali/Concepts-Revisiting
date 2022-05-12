/**Remove duplicates Ended
Description

Given an array of n integers, the array is sorted. You have to remove the duplicates, print only unique elements, do it in place. i.e O(1) space


Input
1<=T<=10

1<=N<=100000

1<=Ai<=100000


Output
output a single integer x, i.e the number of unique elements in the array and in the next line print the x unique elements.

NOTE: Do it inplace


Sample Input 1 

2
3
1 1 2
4
1 1 3 3
Sample Output 1

2
1 2
2
1 3 */
//i am using extra space
function RemoveDup(arr,n){
    let obj = {};
          for(let i=0; i<n; i++){
            let char = arr[i];
            if(obj[char]===undefined){
                obj[char]=1;
                
            }
        }
        console.log(Object.keys(obj).length)
        console.log(Object.keys(obj).join(" "));
        
        // let ans = "";
        // for(let x in obj){
        //     ans+=x+" ";
        // }
        // console.log(ans)
}
let arr = [1 ,1 ,3 ,3];
//arr is sorted
let n = arr.length;
RemoveDup(arr,n);

    // let obj = {"a":1, "b":2};
    // console.log(Object.keys(obj))


    //without using extra space

//first value is always going to same bcz it is soreted
    let m = [1,1,1,4,5,5,6,7];
let a = []
    for(let i=1; i<m.length; i++){
        if(m[i]!==m[i+1]){
            a.push(m[i])
        }
    }
    console.log(a);

    oneSpace(arr,n)
    function oneSpace(arr,n){
            console.log(arr,n);
            let left =1;
            for(let i = 1; i<n; i++){
                if(arr[i]!==arr[i-1]){
                        arr[left]=arr[i];
                        left++;
                }
            }
            console.log(left,arr);
    }