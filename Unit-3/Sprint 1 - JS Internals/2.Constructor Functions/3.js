//The value of this determined how the fn was executed
//1.Default Binding --In a method (fun written inside obj), this refers to the owner obj. In a fun this ref to the global ob

//2.Implicit Binding +-Alone this refers to the global obj
//implicit means global not in fb

//3.Explicit Binding +=Methods like call(), and apply() refers to the any object
//bahar se binding

const kitchen = {
    name:"kitchen",
    purpose:"cook",
    order: "meal",
    cookFood(){
        console.log(`Serving ${this.order}`)
    }
}
kitchen.cookFood();//defalut binding ---Serving meal 

//I want coodFood method in the bedroom
const bedroom = {
    name:"bedroom",
    purpose:"sleep",
    order: "maggied",
};
const living = {
    name:"living",
    purpose:"sleep",
    order: "sleepy maggies",
};
kitchen.cookFood.call(bedroom)//explicit binding --->Serving maggied


//call --attach(this), execute --happedn(at once)
//bind - attach-->execute (step-by-step)