//------ Data Types --------

//--Strings--
console.log('hello, world');
let email = 'valen@gonzalez.com' //you can use single or double quotes
console.log(email);

//String concatenation
let firstName = 'Valen';
let lastName = 'Gonzalez';

let fullName = firstName + ' ' + lastName;  //we can also use de .concat method
console.log(fullName);

//Escape character
//let text = "We are the so-called "Vikings" from the north."; --> JavaScript will misunderstand this string --> the string will be chopped to "we are the so-called"
// the backslash (\) escape character turns special characters into string characters
let text = "We are the so-called \"Vikings\" from the north.";

//Getting characters
console.log(fullName[0]); //first character of the string


//String methods--> function that is associated with a particular object or data type (very similar to a function)

//String length
console.log(fullName.length);

//Converting Upper and Lower case
console.log(fullName.toUpperCase()); //with properties we put .Property but this actually does something --> method . So we put .Method()
let result = fullName.toLowerCase();
console.log(result, fullName);

//Search string methods
let index = email.indexOf('@'); //@: argument/parameter --> returns the index of (position of) the first occurrence of a string in a string
console.log(index);
let email_result = email.lastIndexOf('n'); //returns the index of the last occurrence of a specified text in a string
console.log(email_result);

//Extracting String Parts
console.log(email.slice(2,5)); //takes characters from position 2 to position 5 --> extracts a part of a string and returns the extracted part in a new string
console.log(email.substr(4,10)); //from position 4, takes 10 following characters
console.log(email.replace('n', 'w')); //replaces a specified value with another value in a string - it is case sensitive



//--Numbers--
let radius = 10; //without decimals
const pi = 3.14; //with decimals

console.log(radius, pi);
console.log(10/2);
console.log(radius%3); 

//order of operation - B I T M A S --- Brackets Division Multiplication Addition Substraction
console.log(5*(10-3)**2);

let likes =10;
console.log(likes=+10); 

//Nan - not a number
console.log(5/ 'hello'); //Trying to do arithmetic with a non-numeric string will result in NaN

//concatenation
console.log('the blog has' + likes + 'likes');


//Template strings or Template literals
const title = 'Best reads of 2019';
const author = 'Mario';
const like = 30;

//concatenation way
let results_concat = 'The blow called' + title + 'by' + author + 'has' + like + 'likes';
console.log(results_concat);

//template string way --> interpolate variables and expressions into strings
let results_concat_2 = `The blog called ${title} by ${author} has ${likes} likes`;
console.log(results_concat_2);

//HTML templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${like} likes</span>
`;
console.log(html);



// --Arrays--
//Arrays are objects
let ninjas =['valen', 'nako', 'gugu'];
//let ninjas = new Array('valen', 'nako','gugu') --> is equivalent to the expression above
console.log(ninjas);

ninjas[1] = 'jota'; //changing an array element
console.log(ninjas);

let random = ['vg', 8];
console.log(random);

//Array properties
console.log(ninjas.length);

//Array methods
let join = ninjas.join('-'); //takes the array and joins every element with a coma
console.log(join);

console.log(ninjas.indexOf('valen')); //searches an array for an element value and returns its position
console.log(ninjas.concat(['nako', 'keri'])); //creates a new array by merging (concatenating) existing arrays
console.log(ninjas.push('inesita')); //add a new element to an array
console.log(ninjas.pop()); //deletes the last element of the array 
console.log(ninjas.shift()); //shifting is equivalent to popping, but working on the first element instead of the last
console.log(ninjas);



//--Undifined--
let age2; //NaN
console.log(age2, age2 + 3, `the age is ${age2}`); // the age is undifined

let age3 = null;
console.log(age2, age3 + 3, `the age is ${age3}`);


//--Booleans--
//booleans & comparisons
console.log(true, false, "true", "false");

//methods can return booleans
console.log(email.includes('@')); //returns a boolean
console.log(ninjas.includes('valen')); //also returns a boolean

//comparison operators
let age;
console.log(age == 30); //returns true if it is equal and false if its not

let name = 'shaun';
console.log('h');
console.log(name > 'crystal');
console.log(name > 'Shaun'); //capital letters are bigger than lowercase letters
console.log(age == '30'); //true because javascript lets you compare different data types (because it does a type convertion behind the scenes) --> loose comparison
console.log(age === '25'); //true if it is the same value and type --> false



//--Type conversion--    --> explicit type conversion (manually)
let s = '100';
console.log(typeof s);

s = Number(s);
console.log(s + 1);
console.log(typeof s);

let s_ = Number('hello'); //cannot convert it -- doesnt make sense
console.log(s_)
