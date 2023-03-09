//-----Callbacks------
// Callback example
function myDisplayer(something) {
    document.getElementById("demo").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myDisplayer);


//Another example of a synchronous callback
function greeting(name) {
    alert(`Hello, ${name}`);
  }
  
  function processUserInput(callback) {
    const name = prompt("Please enter your name.");
    callback(name);
  }
  
  processUserInput(greeting);

//-------Asynchronous JS-----
//callbacks are most often used with asynchronous functions

// setTimeout() --> specify a callback function to be executed on time-out
setTimeout(myFunction, 3000); //3000 is the number of miliseconds before time-out --> myFunction() will be called after 3sec

function myFunction() {
  document.getElementById("demo").innerHTML = "Hello world";
}

// setInterval() --> specify a callback function to be executed for each interval
setInterval(myFunction2, 1000); //myFunction2() will be called every second

function myFunction2() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

//------Promises-----
function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;
  
  // The producing code (this may take some time)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

// setTimeout()
let myProm = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); }, 3000);
  });
  
  myProm.then(function(value) {
    document.getElementById("demo").innerHTML = value;
  });


//------Async Syntax-----
function myFunction() {
    return Promise.resolve("Hello");
  }

//async keyword
async function myFunction() {
    return "Hello";
  }

myFunction().then(
function(value) {myDisplayer(value);},
function(error) {myDisplayer(error);}
);

//await keyword
//waiting for a timeout
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();