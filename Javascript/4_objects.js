//------ Objects --------

//object literals
let user = {
    name: 'crystal',
    age: 30,
    email: 'vg8@hotmail.com',
    location: 'argentina'
};

//Accessing Object Properties
console.log(user);
console.log(user.name);
console.log(user['name']); //same as above
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

//array of objects
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


//primitive and reference types
const UserOne = {name: 'val', age:23};
const UserTwo = UserOne; //making a copy --> poniter points to the same object

console.log(UserOne, UserTwo);

UserOne.name = 'valen'; //it is going to change the value of both variables!! because they are both ponting to the same object
console.log(UserOne,UserTwo);