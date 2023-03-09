//JSON Example
// {
//     "configurations":[
//        {
//           "name": "Ingress",
//           "value": "data/input"
//        },
//        {
//           "name": "Egress",
//           "value": "data/output"
//        }
//     ]
//  }


//XML Example
{/* <Configurations>

<Config>
  <Name>Ingress</Name>
  <Value>data/input</Value>
</Config>  

<Config>
  <Name>Egress</Name>
  <Value>data/output</Value>
</Config>

</Configurations> */}

//YAML Example
// ---
// configurations:
//  - name: Ingress
//    value: data/input
//  - name: Egress
//    value: data/output

//-----Parsing JSON-----
//Data recieved as text from a web server:
'{"name":"John", "age":30, "city":"New York"}' //text must be in JSON format

//Data converted from text to a JS object 
const obj = JSON.parse('{"name":"John", "age":30, "city":"New York"}');

//Array as JSON --> the method will return a JavaScript array, instead of a JavaScript object
const text = '["Ford", "BMW", "Audi", "Fiat"]';
const myArr = JSON.parse(text);

//Eval() function --> same as JSON.parse()

//-----Stringify------
// a JS Object
const object = {name: "John", age: 30, city: "New York"};

//Convertion to a string
const myJSON = JSON.stringify(object);

// a JS Array
const arr = ["John", "Peter", "Sally", "Jane"];
const arrJSON = JSON.stringify(arr);

//-----Storing Data --------
// Storing data:
const myObj = {name: "John", age: 31, city: "New York"};
const JSON = JSON.stringify(myObj);
localStorage.setItem("testJSON", myJSON);

// Retrieving data:
let txt = localStorage.getItem("testJSON");
let obj2 = JSON.parse(txt);
document.getElementById("demo").innerHTML = obj2.name;

//------JSON Object Literals-----
obj_literal = {"name":"John", "age":30, "car":null}