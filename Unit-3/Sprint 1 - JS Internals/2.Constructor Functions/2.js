//what if we could control where "this"keyword should belong

//this keyword can point to different obj through call(), apply(),method()
function printName(){
    console.log(this.name);
}
printName();

//call, apply, bind
/**all javascript function has access to some very special methods which we can use to control where "this"  should refer*/
//such methods are call(),apply(),bind()


//call()
//call() provides a new value of "this" to the fn/method

let boy = {
    name:"alishan",
}
function addFet(age,adrs){
    this.age = age,
    this.adress=adrs;
    console.log(this.name);
}
// i like to add this proper to this obj
addFet.call(boy,18,"Kaptanganj")
console.log(boy);
//{ name: 'alishan', age: 18, adress: 'Kaptanganj' }




//===================================APPLY
//the apply method is literally the same as call() method
// the just both take argument differently
//call() takes individual arguments seprarated by commas
let Employe = {
    sector:"SDE-2"
}

function printBio(name,age){
    this.name=name
    this.age=age
}
printBio.call(Employe,"ALishan",18);
console.log(Employe);
//{ name: 'ALishan', age: 18 }

//apply takes a signgle array of arguments
printBio.apply(Employe,[20,"Apply MEhod Name"]);
console.log(Employe);
//{ sector: 'SDE-2', name: 20, age: 'Apply MEhod Name' }

//BIND()
//you can bind  a particular obj as "this" to a function and use it later
//you can not use call(), apply() later they run immediately

let SDE = {
    name:"alishan"
}
function addSkiils(skill,edu){
    this.skill = skill;
    this.education = edu;
    console.log(this);

}
let wow = addSkiils.bind(SDE,"ALishan","18");
wow();
console.log(SDE);



/**where do you usually declare  a variable 
 * 1.in global scope
 * 2.inside fn (local/lexical scope)
 * .3.inside bloack({},called as block scope)
 */

function student (a){
    let data = {};
    data.name=a
    return data;
}
let s1 = student("a");
let s2 = student("aadfas");

console.log(s1,s2);