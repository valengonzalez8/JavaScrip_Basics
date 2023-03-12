//-----Lexical Scope-----
const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    childFunction(); //has access to variable myValue defined in the parent scope of myFunction
                     //This is because the lexical scope of childFunction allows access to the parent scope
}

myFunction();


//-----Closure-----
const myFunction2 = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
         console.log(myValue += 1);
    }

    return childFunction; //returns childFunction instead of calling it 
}

const result = myFunction2(); //the console statement inside myFunction2 is logged, but not the statement inside childFunction
console.log(result); //result now holds the anonymous function value that was childFunction
result(); //we are calling the anonymous function that was assigned to childFunction, this anonymous function has access to the myValue variable inside myFunction even after it has closed!
result(); //closure we created now allows us to continue to increase the value of the myValue variable every time we call result()
result();