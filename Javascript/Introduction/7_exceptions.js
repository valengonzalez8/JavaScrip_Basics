//Exception handling

//Try statement --> defines a code block to run 
//Catch statement --> defines a code block to handle any error 
// they come in pairs

try {
    adddlert("Welcome guest!");
}
catch(err) {
    document.getElementById("demo").innerHTML = err.message; //returns 'adddlert is not defined'
}

//Throw statement --> create a custom error --> you throw an exception

// function myFunction(){
//     const message = document.getElementById("p01");
//     message.innerHTML = "";
//     let x = document.getElementById("demo01").value;
//     try {
//         if(x.trim() == "") throw "empty";
//         if(isNaN(x)) throw "not a number";
//         x = Number(x);
//         if(x < 5) throw "too low";
//         if(x > 10) throw "too high";
//     }
//     catch(err) {
//         message.innerHTML = "Input is " + err; //returns the customized error
//     }
// }

//Finally statement --> lets you execute code, after try and catch, regardless of the result
function myFunction(){
    const message = document.getElementById("p01");
    message.innerHTML = "";
    let x = document.getElementById("demo01").value;
    try {
        if(x.trim() == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x < 5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err) {
        message.innerHTML = "Input is " + err; //returns the customized error
    }
    finally{
        document.getElementById("demo01").value = ""; 
    }
}