"use strict"; //has to be defined at the begginig of the script

//Hoisting --> default behaviour of moving declarations to the top
x = 5;
var x;
console.log(x);

// let and const keywords are hoisted to the top of the block but not initialized

//JS initializations are Not hoisted, only declarations are hoisted
var y = 5; // Initialize x
console.log(z + y);
var z = 7; // Initialize y

var y2 = 5; // Initialize x
var z2 = 7; // Initialize y
console.log(y2 + z2);

//use strict mode --> helps to write cleaner code
pi = 3.14;       // This will cause an error because x is not declared
console.log(pi); 

