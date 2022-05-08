//HOW JS WORKS
//BEHIND EVERY LANG THERE LIES A PROCESSING ENGINE TO UNDERSTAND IT 
//FOR COMPUTERS IT IS A COMPILER 
//JS CODE-----BROWSER JS ENGINE ----->---MACHINE CODE
//CHROME -V8 -----EDGE--CHAKRA    ---MOZILLA --SPIDERmONKEY

//=**********************************HOISTING*************
//Hoisting only applies to variable and fn and classes but throw and error
//Hoisting justt consiider declaration part not the actual assign value part
//Hoisting just cares about what variables and fn are present in a program
//Hoisting is JavaScript's default behavior of moving declarations to the top.

//JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables or classes to the top of their scope, prior to execution of the code.
//Hoisting allows functions to be safely used in code before they are declared.
/**let and const hoisting====
Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized. */

/**
 * class hoisting
Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.
 */
//Function and class expression hoisting
/**
 * The expressions evaluate to a function or class (respectively), which are typically assigned to a variable. In this case the variable declaration is hoisted and the expression is its initialization. Therefore the expressions are not evaluated until the relevant line is executed.
 */
/**
 * A function expression can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined. See also the chapter about functions for more information.


 */


//DIFFERENT TYPE OF FUNCTION EXPRESSION ARE NOT HOISTED
//1. function expresioon
//fnExp()//Cannot access 'fnExp' before initialization
// let Norm= function(){
//     console.log("akdj");
// }
//2.Arrow fn
// fnExp()//Cannot access 'fnExp' before initialization
// let fnExp =()=>{
//     console.log("akdj");
// }
//3.Immediately Invoked function expression (IIFE)
//An anonymous function is created and called:
(function(){
    console.log("hii");
})() //not hoisted  
// !function(){
//     console.log("jii");
// }()
//=====================================================================================
let a;
console.log(a);

