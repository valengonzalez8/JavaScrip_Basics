//------ Objects --------

//object literals --> we've literally written out the object contents as we've come to create it
let user = {
    name: 'crystal',
    age: 30,
    email: 'vg8@hotmail.com',
    location: 'argentina'
};

//Accessing Object Properties 
console.log(user);
console.log(user.name); //dot notation
console.log(user['name']); //bracket notation --> same as above
console.log(typeof user);

//Object Methods
let user2 = {
    name: 'crystal',
    age: 30,
    email: 'vg8@hotmail.com',
    location: 'argentina',
    blogs: ['blog 1', 'blog 2'],
    login: () => {
        console.log('the user logged in');
    },
    logBlogs(){
        //this.blogs //this --> context object: represent the context in which the current code is executed
        // this.blogs means the blogs property of user2
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        });
    }
};

//Accessing Object Methods
user2.login();
user2.logBlogs();
user2.logBlogs; //If you access a method without the () parentheses, it will return the function definition

//Array of objects
const blogg = [
    { title: 'blog 1', likes: 30},
    { title: 'blog 2', likes: 50},
];

let user3 = {
    name: 'crystal',
    age: 30,
    email: 'vg8@hotmail.com',
    location: 'argentina',
    blogs: [
        { title: 'blog 1', likes: 30},
        { title: 'blog 2', likes: 50},
    ],
    login: () => {
        console.log('the user logged in');
    },
    logBlogs(){
        //this.blogs //this --> context object: represent the context in which the current code is executed
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        });
    }
};

user3.logBlogs();


// Math object
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const a = 7.8;
console.log(Math.round(a));
console.log(Math.floor(a));
console.log(Math.ceil(a));
console.log(Math.trunc(a));

const random_num = Math.random()
console.log(random_num);


//Date object 
const d = new Date("2022-03-25");


//Primitive and Reference types
const UserOne = {name: 'val', age:23};
const UserTwo = UserOne; //making a copy --> poniter points to the same object

console.log(UserOne, UserTwo);

UserOne.name = 'valen'; //it is going to change the value of both variables!! because they are both ponting to the same object
console.log(UserOne,UserTwo);



//Object Prototypes
const myObject = {
    city: "Madrid",
    greet() {
      console.log(`Greetings from ${this.city}`);
    },
  };
  
  myObject.greet(); // Greetings from Madrid

Object.getPrototypeOf(myObject); // Object { }

//The prototype of an object is not always Object.prototype
const myDate = new Date();
let object = myDate;

do {
  object = Object.getPrototypeOf(object);
  console.log(object);
} while (object);

// Date.prototype
// Object { }
// null

//Shadowing properties --> defining a property when a property with the same name is defined in the object prototype
const Date = new Date(1995, 11, 17);

console.log(Date.getYear()); // 95

myDate.getYear = function () {
  console.log("something else!");
};

myDate.getYear(); // 'something else!'


//Setting a prototype
//Object.create() --> creates a new object and allows you to specify an object that will be used as the new object's prototype
const personPrototype = {
    greet() {
      console.log("hello!");
    },
  };
  
  const carl = Object.create(personPrototype);
  carl.greet(); // hello!
  
//Constructors
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
      console.log(`Hi! I'm ${this.name}.`);
    };
  }

const salva = new Person("Salva");
salva.name;
salva.introduceSelf();

const frankie = new Person("Frankie");
frankie.name;
frankie.introduceSelf();

//Own properties --> the name property from above is set in the constructor, so ir appears directly on Person objects
const irma = new Person("Irma");

console.log(Object.hasOwn(irma, "name")); // true
console.log(Object.hasOwn(irma, "greet")); // false

//Enumerating properties
//Object.keys(myObject) --> returns an array with only the enumerable own string property names ("keys") in the object myObj, but not those in the prototype chain.
function showProps(obj, objName) {
    let result = "";
    Object.keys(obj).forEach((i) => {
      result += `${objName}.${i} = ${obj[i]}\n`;
    });
    console.log(result);
  }