//FREEZE
let arr = [1,2,3,4];
Object.freeze(arr);
arr[0]=100;
console.log(arr);
//[ 1, 2, 3, 4 ]

 arr = [1,2,3,4];
arr[0]=100;
console.log(arr);
//[ 100, 2, 3, 4 ]
let array=[1,2,8,2,5,9,24,5]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}
// console.log(index);
//coersion
console.log(1=="1");//automatic data-type coersion