//------ Control Flow --------

//--Loops--

//for loop
for(let i = 0; //initialization
    i<5;       //condition
    i++){      //final expresion ("return")

    console.log('in loop:', i);
}

console.log('loop finished');

const names = ['mayus', 'nigga', 'gordi'];

for(let i=0; i<names.length; i++){
    //console.log(names[i]);
    let html2 = `<div>${names[i]}</div>`
    console.log(html2);
}

//while loop
let i = 0;
while(i<5){
    console.log('in loop:', i);
    i++;
}

//do while loop
let k = 3;
do{
    console.log('val of k is:',k); 
    k++;     //does this codeblock once regadless of the condition of the while
} while(k<5);

//if statements
if (age>20){
    console.log('you are over 20 years old');
}

const password = 'passw@';
if (password.length >= 8 && password.includes('@')){
    console.log('that password is long enough');
} else if(password.length >= 5 || password.includes('@')){
    console.log('that password is mighty strong');
} else{
    console.log('password is not long enough');
}


//switch statements
const grade = 'D';

switch(grade){
    case 'A': 
        console.log('you got an A!');
        break;
    case 'B': 
        console.log('you got an B!');
        break;
    case 'C': 
        console.log('you got an C!');
        break;
    case 'D': 
        console.log('you got an D!');
        break;
    case 'E': 
        console.log('you got an E!');
        break;
    default:
        console.log('not a valid grade');
}
