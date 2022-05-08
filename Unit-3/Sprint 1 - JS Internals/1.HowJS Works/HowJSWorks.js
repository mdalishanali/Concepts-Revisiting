let a;
console.log(a);//undefined
let c = null;
//by value and by reference
let num = 12;
console.log(num);// the hold the value

let obj = {
    name:"alishan",
}
console.log(obj);//the hold the ref from memory 



let m = 12;
let n = m;
n = 10;
console.log(m);//it store the value by 

let b = {
    y:"a"
}
let v = b;
v.y="v";
console.log(b);//change the value bcz it pass by ref



//================================DATA MUTABILITY
let admin = {name:"raj"};//we don't want to change
let user = admin;
user.name="user";
console.log(admin);


///IN PRIMITIVE DATA TYPES VALUES CAN NOT BE CHANGE
let name = "alishan";
name="saif";
console.log(name);//mutate but this not
console.log(name[0]);//s
name[0]="b";
console.log(name);//here we can not change thee value

let arr=[1,2,3];
arr[0]="ali";
console.log(arr);




//Hoisting
//first time it check with all the var and take attendation
//all the fn and var get at the top of the code
//all hoisting cares about is what var and fn are present in program



///Execution Context
//context means background, enviroment, surrounding of events or occurence
///enviroment basically tells the acceseibility
{
    let name = "alishan";
    function wow(){
        name="saif";
    }
    wow();
    console.log(name);

}

//types of exucution context
//global execution context
//fun execution context
//whenever js start executing code there is some var


//phase
//creation phase
//execution phase









//471+12
//4+7+1
//s1==s2 

/**
 * arr1 from 
 * arr1 to
 * 0  
 * 1
 * 
 */