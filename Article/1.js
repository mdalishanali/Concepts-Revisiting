What is the difference between == and === operators?
JavaScript provides both strict(===, !==) and type-converting(==, !=) equality comparison. The strict operators take type of variable in consideration, while non-strict operators make type correction/conversion based upon values of variables.

What is the spread operator?
Spread allows objects and iterables (such as arrays) to be unpacked, or expanded, which can be used to make shallow copies of data structures to increase the ease of data manipulation. It prevents the original array from being mutated.

const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']
// Originally you would use concat() to concatenate the two arrays:
const allTools = tools.concat(otherTools)
// Can also use spread to unpack the arrays into a new array:
const allTools = [...tools, ...otherTools]
// ['hammer', 'screwdriver', 'wrench', 'saw']
Spread allows you to create a new array from the existing one and add a new item to the end:

const users = [
  { id: 1, name: 'Ben' },
  { id: 2, name: 'Leslie' },
];
const newUser = { id: 3, name: 'Ron' };
// Add values from newUser into updatedUsers at the end
const updatedUsers = [...users, newUser];
Spread allows you to make a shallow copy of an array or object, meaning that any top-level properties will be cloned, but nested objects will still be passed by reference.

const originalArray = ['one', 'two', 'three']

// Use spread to make a shallow copy
const secondArray = [...originalArray]

// Remove the last item of the second Array
secondArray.pop()

console.log(originalArray)
Spread with objects

When working with objects, spread can be used to copy and update objects.

// Originally, Object.assign() was used to copy an object:
const originalObject = { enabled: true, darkMode: false }
// secondObject is a clone of the originalObject
const secondObject = Object.assign({}, originalObject)
Instead, we can use the simplified spread syntax:

const secondObject = { ...originalObject }
Note: The spread operator will make a deep copy of the data if it is not nested. If it is nested, it will make a shallow copy of the nested data.

Spread with function calls

Spread can also be used with arguments in function calls.

const numbers = [1, 2, 3];
function sum(x, y, z) {
  return x + y + z;
}
// Normally, you would pass three values individually
sum(1, 2, 3);
// If argument values exist in array instead:
sum(...numbers);
What is the rest operator?
The rest syntax is the same as spread (...) but has the opposite effect. The rest syntax will create an array of an indefinite number of arguments.

function restTest(...args) {
  for (let i = 0; i < args.length; i++) {
     console.log(args[i]);
  }
}

restTest(1, 2, 3, 4, 5, 6);
Rest syntax can be used as the only parameter or as the last parameter in the list. If used as the only parameter, it will gather all arguments, but if it’s at the end of a list, it will gather every argument that is remaining, as seen in this example:

function restTest(one, two, ...args) {
  console.log(one)
  console.log(two)
  console.log(args)
}

restTest(1, 2, 3, 4, 5, 6)
What is the purpose of the array slice method?
The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0,2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2,3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
Note: The slice method won’t mutate the original array but it returns the subset as a new array.

What is the purpose of the array splice method?
The splice() method is used to either adds/remove items to/from an array and then return the removed item. The first argument specifies the array position for insertion or deletion whereas the optional second argument indicates the number of elements to be deleted. Each additional argument is added to the array.

let arrayIntOrig1 = [1, 2, 3, 4, 5];
let arrayIntOrig2 = [1, 2, 3, 4, 5];
let arrayInt1 = arrayIntOrig1.splice(0,2); 
// returns [1, 2]; original array: [3, 4, 5]
let arrayInt2 = arrayIntOrig2.splice(3); 
// returns [4, 5]; original array: [1, 2, 3]
Note: The splice method modifies the original array and returns the deleted array.

What are lambda or arrow functions?
An arrow function is a shorter syntax for a function expression and does not have its own this, arguments, or super reference. A lambda function is called an anonymous function (no label). These functions are best suited for non-method functions (not in a class), and they cannot be used as constructors.

What is a first-class function?
First-class functions mean when functions in that language are treated like any other variable. A function can be passed as an argument to other functions, can be returned by another function, and can be assigned as a value to a variable.

const handler = () => console.log ('Click handler function');
document.addEventListener ('click', handler);
What is a callback function?
A callback function is a function that is passed into another function as an argument which is then invoked inside the outer function.

What is a higher-order function?
A higher-order function is a function that accepts another function as an argument or returns a function as a return value or both.

const callBackFunc = () => console.log ('First order function');
const higherOrder = returnFirstOrderFunc => returnFirstOrderFunc();
higherOrder(callBackFunc);
What are some examples of built-in higher-order functions in JavaScript?
Map

Takes a callback function and returns a new array based on the results of the callback function (same size as the original array).

const myArr = [1,2,3];
const squared = myArr.map(x => x * x);
Filter

Takes a callback function and returns a new filtered array (same or normally less than the original array).

const students = ['James', 'Jose', 'Katya', 'Kelsey', 'Sergey']
const newArray = students.filter(name => name[0] === 'K');
Reduce

Takes a callback function (the “reducer”) and an initial value for the accumulator.

Array.reduce(reducer function, initial value)
Returns a single output. The reducer function requires two arguments: an accumulator and a current value.

const amounts = [29.76, 41.85, 46.5];
const sum = amounts.reduce((total, amount) => total + amount);
In the above example, the reduce method cycles through each number in the array much like it would in a for-loop. When the loop starts the total value is the number on the far left (29.76) and the current amount is the one next to it (41.85).

We want to add the current amount to the total.

The calculation is repeated for each amount in the array, but each time the current value changes to the next number in the array, moving right. When there are no more numbers left in the array the method returns the total value.

What is method chaining?
Method chaining means that you can run multiple methods in a single statement, by the use of their return values. Methods must have return values in order to be chained — at least, the method that is being chained to.

Let’s say we want to create a new array where we filter out only the states that begin with the letter M and capitalize those states that do:

const states =  ["Washington", "Maine", "Montana"];
const statesUpperCase = states.filter(state => state[0] === "M").map(state => state.toUpperCase());
What is a pure function?
Any function that does not change the internal state of one of its arguments or the value of some external data. It must only depend on its input arguments. They do not have any side effects like network or database calls. If you call this function n times with the same arguments it will return the same results every time.

Math.random() is an impure function;
Note: A dead giveaway that a function is impure is if it makes sense to call it without using its return value. You would not do that with a pure function.

What is scope?
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.

There is the global scope, function scope, lexical scope and block scope.

Global scope gets put in the Global Execution Context. In the browser, it would be attached to the Window object. In a Node environment, it would be in the module itself.

Function scope is available to a function when that function is executed. When a function is executed a function-level execution is created and has function-level scope. That function execution context knows about its own scope.

Lexical scope allows a function scope to access the variables from the outer scope which is called a closure.

Block scope is the area within if, switch conditions or for and while loops. Generally speaking, whenever you see {curly brackets}, it is a block. In ES6, const and let keywords allow developers to declare variables in the block scope, which means those variables exist only within the corresponding block.

What is the difference between let and var?

Variables declared both with var and let are hoisted. The difference is that a variable declared with var can be referenced before its own assignment, since it gets automatically assigned (with undefined as its value), but let cannot as it specifically requires the variable to be declared before being invoked.

What is hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

If you console.log a variable with typeof that has not been defined, it will have a value of undefined which is a primitive data type.

console.log(typeof variable); // Output: undefined
If you just console.log the variable itself you will get a ReferenceError. This will occur when a non-existent variable is referenced.

console.log(variable); 
// ReferenceError: variable is not defined
As mentioned before, all variable and function declarations are hoisted to the top of their scope. I should also add that variable declarations are processed before any code is executed.

However, in contrast, undeclared variables do not exist until the code assigning them is executed. Therefore, assigning a value to an undeclared variable implicitly creates it as a global variable when the assignment is executed.

var

The scope of a variable declared with the keyword var is its current execution context. This is either the enclosing function or for variables declared outside any function, global.

console.log(hoist); // Output: undefined
var hoist = 'The variable has been hoisted.';
We get an undefined output and not the ReferenceError: hoist is not defined because the declaration was hoisted. Because of this, we can use variables before we declare them. However, we have to be careful because the hoisted variable is initialized with a value of undefined.

function scoped variables

As we’ve seen before, variables within a global scope are hoisted to the top of the scope. Let’s look at how function scoped variables are hoisted.

function hoist() {
  console.log(message); // undefined
  var message='Hoisting is all the rage!'
}
hoist();
The same results happen with the scope of a function declaration. var message whose scope of the function hoist() is hoisted to the top of the function.

Here is how JavaScript interpreter sees it:

function hoist() {
  var message;
  console.log(message); // undefined
  message='Hoisting is all the rage!'
}
hoist(); // Ouput: undefined
Strict mode

By enabling strict mode, we opt into a restricted variant of JavaScript that will not tolerate the usage of variables before they are declared.

We enable strict mode by prefacing our file or function with (at the top):

'use strict';
let

With ES6 we were introduced to let and const to declare variables.

Just like var, let declarations are hoisted to the top. Unlike var which is initialized as undefined, the let keyword is not initialized. So if you try to use a let variable before declaration, you'll get a Reference Error.

console.log(hoist); // ReferenceError: hoist is not defined
let hoist = 'The variable has been hoisted.';
function declarations

Function declarations are hoisted completely to the top.

hoisted(); // Output: "This function has been hoisted."
function hoisted() {
  console.log('This function has been hoisted.');
};
function expressions

Function expressions, however are not hoisted.

expression(); //Output: "ReferenceError: expression is not defined
let expression = function() {
  console.log('Will this work?');
};
But if you use var the error will be a TypeError instead of a ReferenceError because variables defined get automatically added to the global context. So basically it knows of it, but not what it is, value or function.

expression(); //Output: "TypeError: expression is not a function
var expression = function() {
  console.log('Will this work?');
};
What is the Temporal Dead Zone?
The Temporal Dead Zone is a behavior in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var.

In ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a ReferenceError. The time span when that happens, between the creation of a variable’s binding and its declaration, is called the temporal dead zone. ☠️

function somemethod() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}
What is memoization?
Memoization is a programming technique that attempts to increase a function’s performance by caching its previously computed results. Each time a memoized function is called, its parameters are used to index the cache. If the data is present, then it can be returned, without executing the entire function. Otherwise the function is executed and then the result is added to the cache.

function memoize(func) {  
   const storage = {}
   return function (val) {
      if (storage[val]) {
         console.log('In Storage')
         return storage[val]    
      } else {
        console.log('Computating')
        storage[val] = func(val)
        return storage[val]
    }
  }
}
The above function returns a function that when called (closure), will check if it has already computed the result for the given argument and return that value instead if possible.

What are closures?
A closure is the combination of a function and the lexical environment within which that function was declared. i.e, It is an inner function that has access to the outer or enclosing function’s variables.

The closure has three scope chains:

Own scope defined between its curly brackets (inner scope)
Outer function’s variables
Global variables
function counter (startingCounter) {
   let count = startingCounter; // outer scope
   
   return function (increment) {
      count = count + increment // inner scope
      return count;
   }
}
const startingAt10 = counter(10); // reference to inner function
console.log(startingAt10(2)); // executing inner function
console.log(startingAt10(2)); // executing inner function
// 12
// 14
The counter function returns a function that has access to its outer scope which contains the count variable which is initialized to the value of startingCounter. The variable startingAt10 now references the function that was returned from counter. That inner function “remembers” the value of count and will use it when it increments its value from the values of 2 called to it which is stored in increment.

When a function gets created and passed around or returned from another function, it carries a backpack with it. And in the backpack are all the variables that were in scope when the function was declared. So in the backpack would be the variable of count with the value of 10.

What is an object?
An object is a collection of custom key/value pairs that store properties (such as name, height, color) and methods (actions — add(), delete() log(), etc).

Methods are functions attached to objects. When called, methods run code and can have a return value.

What is object destructuring?
JavaScript object destructuring is the syntax for extracting values from an object property and assigning them to a variable. The destructuring is also possible for arrays too.

By default, the object key name becomes the variable that holds the respective value. So no extra code is required to create another variable for value assignment.

const user = { 
    name: 'Josh',
    address: '15th Park Avenue',
    age: 29
}
The expression to extract the name property value using object destructuring is the following:

const { name, age } = user; // name and age variables are created
console.log(name); // Josh
console.log(age): // 29
On the left side of the expression, we pick the object property key and place it inside the {}. It also becomes the variable name to hold the property value.

You can give an alias to your destructured variables:

const { address: permanentAddress } = user;

console.log(permanentAddress); // 15th Park Avenue
array destructuring

Array destructuring does the same as object destructuring in creating new variables using an array item as a value.

const date = ['1980', '12', '01']
const [year, month, day] = date
console.log(year); // 1980
console.log(month); // 12
console.log(day); // 01
What are the possible ways to create objects?
// Object's create method:
const person = {
  isHuman: false,
  printIntroduction: function() {
    console.log(`My name is ${this.name}. Am I human?
               ${this.isHuman}`);
  }
};
const me = Object.create(person);
// Object literal syntax:
const object = {};
// Function construtor
function Person(name){
   var object = {};
   object.name = name;
   object.age = 21;
   return object;
}
const object = new Person("Frank");
// ES6 Class syntax:
class Person {
   constructor(name) {
      this.name = name;
   }
}

const object = new Person("Frank");
What are classes in ES6?
In ES6, Javascript classes are primarily syntactic sugar over JavaScript’s existing prototype-based inheritance. Classes in JavaScript are templates for creating objects. A class has a special method inside it called a constructor. The constructor method creates and initializes any object made from that class.

function Person(first, last) {
    this.firstName = first;
    this.lastName = last;
}
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
};
Whereas ES6 classes can be defined as an alternative:

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
What is the this keyword?
The JavaScript keyword this inside an object refers to the object itself. With classes, you will need to use the this keyword to initialize arguments passed in via the parameter list as properties of objects created from that class.

What is class inheritance?
You can inherit the properties and methods of an existing class into a new class using the extends keyword and the super method, then add more properties and methods to the new class only.

Defining these ‘subclasses’ is done by using the extends keyword to tell JavaScript your new class is to inherit from a particular base class.

Base class (Person):

class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
Here’s an example of a Teacher subclass that inherits from Person:

class Teacher extends Person {
    constructor(first, last, grade) {
        // call the base class constructor
        super(first, last);

        this.grade = grade;
    }
}
As you can see, the extends keyword is used to tell JavaScript that the Teacher class is to inherit from the Person class. This means that the constructor, properties and method of the “super” base class are available to the subclass.

By calling super() within the constructor, the this keyword will be setup as a reference to the newly created object. This is not something that is automatically initialized for the class by using the extends keyword.

This Teacher class example is extending the Person base class with an additional grade property. You can call this property, or any other defined methods on the subclass, just as you would properties or methods of the base class.

Notice that the Teacher class implements its own constructor method. This is so you can instantiate an instance of this class and pass it any necessary parameters/state to start with.

What is a prototype chain?
Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

The prototype on object instance is available through Object.getPrototypeOf(object) or proto property whereas prototype on constructors function is available through Object.prototype.


What is the difference between Call, Apply and Bind?
Call: Invokes a function with a specified this context, and optional arguments. call requires the arguments to be passed in one-by-one.

this actually becomes the object passed as an argument.

const employee1 = {firstName: 'Frank', lastName: 'Stepanski'};
const employee2 = {firstName: 'Josh', lastName: 'Roberts'};

function invite(greeting1, greeting2) {
   console.log(this); 
   // {firstName: 'Frank', lastName: 'Stepanski'};
   console.log(`${greeting1}, ${this.firstName} ${this.lastName}
                 ${greeting2}`);
}

invite.call(employee1, 'Hello', 'How are you?'); 
// Hello Frank Stepanski, How are you?
invite.call(employee2, 'Hello', 'How are you?'); 
// Hello Josh Roberts, How are you?
Apply: Invokes a function with a specified this context, and optional arguments. apply takes the arguments as an array.

const employee1 = {firstName: 'Frank', lastName: 'Stepanski'};
const employee2 = {firstName: 'Josh', lastName: 'Roberts'};

function invite(greeting1, greeting2) {
   console.log(this); 
   // {firstName: 'Frank', lastName: 'Stepanski'};
   console.log(`${greeting1}, ${this.firstName} ${this.lastName}
                 ${greeting2}`);
}

invite.apply(employee1, ['Hello', 'How are you?']); 
// Hello Frank Stepanski, How are you?
invite.apply(employee2, ['Hello', 'How are you?']); 
// Hello Josh Roberts, How are you?
bind: returns a new function, allowing you to pass any number of arguments

const employee1 = {firstName: 'Frank', lastName: 'Stepanski'};
const employee2 = {firstName: 'Josh', lastName: 'Roberts'};

function invite(greeting1, greeting2) {
   console.log(this); 
   // {firstName: 'Frank', lastName: 'Stepanski'};
   console.log(`${greeting1}, ${this.firstName} ${this.lastName}
                 ${greeting2}`);
}
const inviteEmployee1 = invite.bind(employee1);
const inviteEmployee2 = invite.bind(employee2);
inviteemployee1.bind('Hello', 'How are you?']); 
// Hello Frank Stepanski, How are you?
inviteEmployee2.bind('Hello', 'How are you?'); 
// Hello Josh Roberts, How are you?
Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma-separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

There are lots more but these are probably the most common ones you will be asked from what I’ve heard talking to people interviewing for entry/junior level positions in regards to JavaScript.

Note: These are JavaScript questions related to the language itself, not any APIs (DOM, Promise, Fetch, etc). I would research those topics as well.

Check out these videos if you just like to watch 👀


