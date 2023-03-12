//-------- Syntax ------

//Examples
// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let true_bool = true;
let false_bool = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");



//Keywords
//reserved words -- we cannot define a variable as const or let because they are reserved in javascript 
//preferably use googlechrome because some browsers do not support the const and let

//no keyword
age = 30;
console.log(age);

//let keyword
let age = 25; //inicialize a value -- we can change the value later
let myYear = 2019; //camel case -- because you cannot use spaces -- other solution is the underscore
console.log(age, myYear);  


//const keyword
const points = 100; //initialize a value that cannot be modified -- cannot overwrite -- if we overwrite => error
console.log(points);
// points = 90 --> this will give an error
// points = points + 10 --> this will also give an error

//var keyword
var score = 75; //older way to create variables -- before let and const existed --> permits overwrite
console.log(score);

//One statement, many variables --> You can declare many variables in one statement
let name = 'John Doe', carName = 'Volvo', price = 200;


//Block Scope 
//Variables declares with let inside a {} block cannot be accessed form outside the block
{
    let x = 2;
}
// x can NOT be used here

let x = 10;
// Here x is 10

{
let x = 2;
// Here x is 2
}

// Here x is 10

//Variables declared with the var keyword can NOT have block scope --> they can be accessed from outside the block
{
    var y = 2;
}
// y CAN be used here

var y = 10;
// Here x is 10

{
var y = 2;
// Here x is 2
}

// Here x is 2



//Let Hositing
//variables defined with var are hoisted to the top and can be initialized at any time --> you can use the variable before it is declared
//variables defined with let are also hoisted to the top of the block, but not initialized --> you can not use a let variable before it is declared
Name = "Volvo";
var Name;

