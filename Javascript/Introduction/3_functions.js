//------ Functions --------
//function declaration
greet(); //hoisting --> we can call it before defining the function

function greet(){
    console.log('hello there');
}

//function expression --> store a function inside a variable
const speak = function(name){
    console.log(`good day ${name}`);
    return name;
};  //remember the semicolon

const name = speak('valen') //hoisting doesnt work with function expression, only function declaration

//arrow function
const calcArea = (radius) => { //we need the parenthesis if there is none or more than one parameter --> in this case we dont need it
    return 3.14*radius**2;
};

const area = calcArea(5);
console.log('area:',area);

//simplified
const Area = radius => 3.14*radius**2;
console.log('area:', Area(5));

//callbacks -- we pass a function into someting as a parameter
const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
};

myFunc(value => {
    //do something
    console.log(value);
})

//forEach
let people = ['valen', 'male', 'iara'];

people.forEach(person => {
    console.log(person);
});

//callbacks & forEach
const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach(logPerson);

//get reference to the 'ul'
const ul = document.querySelector('.people');

let html3 = ``;
people.forEach(function(person){
    //create html template
    html3 += `<li style ="color: purple">${person}</li>`
});

console.log(html3)
ul.innerHTML = html3