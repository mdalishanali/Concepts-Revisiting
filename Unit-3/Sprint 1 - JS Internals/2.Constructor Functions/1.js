/**In computer science, an object can be a variable, a data structure, a function, or a method. As regions of memory, they contain value and are referenced by identifiers. 
 */
let Person = {name:"alishan", age:18};
console.log(Person);
//SO, IF WE HAVE TO MAKE 100 OBJECT THEN WE HAVE TO WRITE THE KEY AGAIN AND AGAIN SO THAT QUITBIT HECTIC AND NOT GOOD 
                //HOW DO I CREATE OBJECT
                //1.OBJECT LITERAL  -- let man = {}
    //we need better way to create obj -----------so comes in the pic is called Constructors
//
//what are constructors
    //construct-To build something new  || TO create something new
//the constructor method in JS is a special fn used to create object
        //we have to provide blueprint of what key value pair in object should have
                //to do that we use fn

            
   //who is the owner of key value pair
        let man = {
            name:"json",
            getName:function(){
                console.log(this.name);
            }
        }
        console.log(man);
        man.getName();

    //Inro to this keyword
    //this refers to owner obj
    //1.this inside fn
    //2.this inside fn methods

//THE VALUE OF THIS IS DETERMINED BY HOW THE FUNCTION WAS EXECUTED
//IN A METHOD (FUNCTION WRITTEN INSIDE OBJ), THIS REFERS TO THE OWNER 
//ALONE THIS REFERS TO THE GLOBAL OBJECT//window obj
//IN A FUNCTION THIS REFERS TO THE GLOBAL OBJECT//windown obj


//this helps us to create obj using fn


function Player(n,s){
    this.name=  n;
    this.series = s;
}
let obj = new Player("Walter White","Breaking End");
console.log(obj);

//so how did we move from simple fn that return values to creating obj using them
//it is just bcz this and new keyword



                //JS CONSTRUCTOR FN
//==================IMPORTANT THINGS TO REMEMBER==========
//*new KEYWORD IS MANDATORY
//* YOU CAN ALSO PASS FUNCTION AS ARGUMENT VALUE
//*BEST USED FOR CREATING MULTIPLE OBJ OF SAME TYPE

//WE LEARN ABOUT CREATING CUSTOM OBJ USING JS FN
