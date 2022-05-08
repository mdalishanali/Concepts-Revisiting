let person = {
    name:"alishan",
    age:18
}

function Person(n,age){
    this.name=n;
    this.age=age;
    
}
function Person2(n,age){
    this.name=n;
    this.age=age;
}

let man = new Person("alishan",18);
console.log(man);













//i have to appy getName fn
let boy = {
    name:"shyam",
    // getName:function(){
    //     console.log(this.name);
    // }
}
//console.log(boy.getName());
let girl = {
    name:"Radha",
    // getName:function(){
    //     console.log(this.name);
    // }
}
// boy.getName();

function getName(age,adrs){

    this.myAge = age;//to aadd another key value
    this.address = adrs
    console.log(this);//print the name of biy{ name: 'shyam', myAge: 18 }
    console.log(this.name);//print the name of biy
}
// getName.call(boy)
//getName.call(boy,18,"CPJ")
// getName.apply(boy,[18,"CPJ"])
let BindEx = getName.bind(boy,18,"CPJ")
BindEx()//IN BIND WE HAVE TO PASS PARAMS LIKE CALL


//solve this problem to writing the getname fn in every oBj

console.log("boy",boy);//boy { name: 'shyam', myAge: 18 }


//=============APPLY
//both had do same work just is that apply takes parms as an array
//getName.apply(boy,[18,"CPJ"]) we just pass params as parameters in 