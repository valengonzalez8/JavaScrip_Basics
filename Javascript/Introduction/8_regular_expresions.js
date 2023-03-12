//String methods
//Search method
let text = 'Hello my name is Valentina Gonzalez';
let n = text.search('Valentina');
console.log(n);

//Replace method
let text2 = 'I like playing football with my friends';
let result = text2.replace('football', 'hockey');
console.log(result);



//Regular Expressions

//Modifiers
// i --> case-insensitive matching
let i = text.replace(/valentina/i, 'Agustina'); //Use a case insensitive regular expression to replace Valentina with Agustina in a string
console.log(i);

// g --> global match
let g = text.replace(/a/g, 'e'); //Use a global match regular expression to find al the 'a' and replace them with a 'e'
console.log(g);

// m --> multiline matching
let text3 = '\nIs th\nis it?';
let m = text3.match(/^is/m);
console.log(m);

//Patterns
// [] --> find any characters or digits between the brackets
let pattern = text.match(/[a]/g); //Uses a global match regular expression to find all the 'a' in the string
console.log(pattern);

// () --> find any of the alternatives seperated by |
let pattern2 =  text.match(/(Valentina|Gonzalez)/g); 
console.log(pattern2);

//Metacharacter --> characters with special meaning
// \d --> find a digit
let text4 = "Give 100%!";
let d = text4.match(/\d/g);
console.log(d);

// \s finds a whitespace character

// \b finds a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
let b = text.search(/bGo/g);
console.log(b);

//Quantifiers
// n+ --> matches any string that contains at least one n
let quantifier = text.match(/n+/g);
console.log(quantifier);

// n*	Matches any string that contains zero or more occurrences of n
// n?	Matches any string that contains zero or one occurrences of n

//Regular expression object
//test method --> searches a string for a pattern, and returns true or false, depending on the result
const pattern3 = /e/;
console.log(pattern3.test('the best things in life are free')) //searches for the 'e' in the string and returns true

//exec method --> searches a string for a specified pattern, and returns the found text as an object. if not --> returns null
console.log(/e/.exec('the best things in life are free'));

