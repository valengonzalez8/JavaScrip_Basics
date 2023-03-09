//------ DOM --------
// const para = document.querySelector('p') //grab an element form the DOM (the first p tag and ignores the rest)
// console.log(para);

// const para = document.querySelector('.error') //grabs the first class and ignores the rest
// console.log(para);

const para = document.querySelector('body > h1') //grabs the first class and ignores the rest
console.log(para);

const paras = document.querySelectorAll('p'); //grabs all the p tags
console.log(paras);
console.log(paras[0]);

paras.forEach(para => {
    console.log(para);
});

const errors = document.querySelectorAll('.error');
console.log(errors);

//get an element by ID
const page_title = document.getElementById('page-title');
console.log(page_title);

//get elements by their class name
const class_name = document.getElementsByClassName('error') //we dont need the . because it is already implied that we are getting a class
console.log(class_name); //we get an htmlCollection --> we cannot use a forEach on an htmlCollection
console.log(class_name[0]);

//get elements by their tag name
const tag_name = document.getElementsByTagName('p');
console.log(tag_name);
console.log(tag_name[1]);

// editing the DOM
const paragraph = document.querySelector('p')
console.log(paragraph.innerText) //shows the text inside
para.innerText = 'Javascript Basics';

const paragraphs = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text'; 
});

const content = document.querySelector('.content');
console.log(content.innerHTML);
content.innerHTML += '<h2> This is a new h2 </h2>'; //= overwrites ; += adds

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
})

//html attributes
const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href', 'hettps://www.youtube.com'); //modifying the attribute
link.innerText = 'Youtube website';

const mssg = document.querySelector('.error');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
mssg.setAttribute('style', 'color: green'); //aggregates an attribute if it doesnt exist

const tt = document.querySelector('h1');
console.log(tt.style);
console.log(tt.style.color);

tt.style.margin = '50px';
tt.style.color = 'crimson';
tt.style.fontSize = '60px';
tt.style.margin = '';

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error');