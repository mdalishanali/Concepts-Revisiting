/*
There are five primititive data types  and 3 Non Promitive Data Types
1.Primitive Data Tyoe :-- Primitive Data type is a basic type provided by a programming language as basic building block */
//==============================================================
/**
 * Primitive Data Types
 * 1. String --seq of char 
 * 2.Boolean --It has two values true or false
 * 3.Number --- Number rep the numeric value
 * 4.Undefined - Undfined is val   type of Undefined -- undefined
 * 5.Null  --- wipe all data    type of null  is obj
 */
//==============================================================
/**Non Primitive Data Types
 * Object -- Object is a collection of key value pair
 * Array ---//An array is defined as the collection of similar type of data items stored at contiguous memory locations
 * Function --
 * A JavaScript function is a block of code designed to perform a particular task.
 A JavaScript function is executed when "something" invokes it (calls it).
 */

//JavaScript is a loosely typed language, meaning any variable can contain any type of data: a string can be replaced with a number, and vice versa.
{
    let arr = ["a",1,2,{a:"a"},["a","b"],true,false];
console.log(typeof arr);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
let obj1 = {id:1, name:"sh"};
let obj2 = {id:1, name:"sh"}
let obj3 = {id:1, name:"sh"}
let arrObj = [obj1,obj2,obj3];
console.log(...arrObj);
for(let user of arrObj){
    console.log(`${user.id}:${user.name}`);
}
}
//==============================================================
//Reassignment
//==============================================================
        //PASS BY VALUE AND PASS BY REFERENCE
    //PRIMITIVE DATA TYPES HOLD THE ACTUAL VALUE
    //By value
            // the original var is not modified on chages in other variables
        let a = 10;
            b = a;
           b=20;
            console.log(a,b);
            //NON PRIMITIVE DATA TYPE 
            //THE HOLDS THE LOCATION OF VALUE
//By Reference
            // the original var is  modified on chages in other variables
            let arr = [1,2,3];
            let NP = arr;
            NP[0]="pri";
            console.log(arr);
//==============================================================
//==============================================================

//Mutability
//Primitive Data Types -- immutable (value can not be changes in memory)
let ex = "str";
ex[0]="m"//we can not changed the value in memory so it is immutable
console.log(ex);
//NonPrimitive Data Types --mutable (value can be chanaged in memory)
let exA = [1,1,3,5];
exA[0]=100;
console.log(exA);

//MUTABILITY REFERS TO CHANGEING THE VALUE ITSELF NOT THE VALUE OF VARIABLE