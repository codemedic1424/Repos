console.log("Welcome, Traveler!"); 

let name    = "John"
let surname = "Smith"
let fullName = name + ' ' + surname

console.log(name); 
console.log(surname)
console.log(fullName)

const pi = 3.14
// pi = 10
// Will throw an error. Const cant not be changed.
console.log(pi) 

console.log(23 + 97)
console.log((4+6+9)/77) 

// javascript.info Variables article

let admin = name
let name1 = "John"
console.log(admin)

let homePlanet = "Earth"
let currentUser = "Current User"

//  w3schools.com JS Arithmetic

// let x = 100 + 50; 
// console.log(x);

// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

// MDN JS Math

// Integers have no decimal point
// floating point numbers have a decimal point

const myInt = 5;
const myFloat = 6.667; 
const age = '3'
const negative = -3

console.log(typeof myFloat);
console.log(typeof age);

const lotsOfDec = 1.7665849586757
console.log(lotsOfDec)
const twoDecPla = lotsOfDec.toFixed(2)
console.log(twoDecPla);

let myNumber = "74"; 
console.log(myNumber);
console.log(typeof myNumber);
myNumber = Number(myNumber) + 3
console.log(myNumber);

// DATA TYPES AND CONDITIONALS

const string = "The revolution will not be televised."
console.log(string);
const badString = string
console.log(badString);

// Template Literal

const person = 'Chris'
const greeting = `Hello, ${person}!]`
console.log(greeting)


// W3 Template Methods

let text = 'ABCDEF';
let length = text.length;
// gets the length of the string characters
console.log(length);
// extracts specific character in the string
console.log(text.charAt(0));
// UTF-16 code for a specific character in the string
console.log(text.charCodeAt(0));
// extracts specific character in the string (allowing for negative integers)
console.log(text.at(0));

// string Parts

// slices out portion of the string (excluding end index)
console.log(text.slice(0,3))
// negative parameters starts from the end of the string
// Similar to slice, but the second parameter refers to length of slice
console.log(text.substr(0,3));
// converts btwn upper and lower cases
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// String Concat

let text2 = 'GHFIJKL';
let text3 = text.concat(text2);
console.log(text3);
// pads beginning ro end of string with character
console.log(text3.padStart(15,"Z"));
// repeat...
console.log(text3.repeat(3));
// replace
console.log(text3.replace('ABC','123'));

// MDN String Methods Lesson

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

// String primitives and String objects

const strPrim = "foo"; // A literal is a string primitive
const strPrim2 = String(1); // Coerced into the string primitive "1"
const strPrim3 = String(true); // Coerced into the string primitive "true"
const strObj = new String(strPrim); // String with new returns a string wrapper object.

console.log(typeof strPrim); // "string"
console.log(typeof strPrim2); // "string"
console.log(typeof strPrim3); // "string"
console.log(typeof strObj); // "object"

// Conditionals

// JS Conditional statements:
/* Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed */

// MDN Condition Lesson (Great examples for future website features)

// covers the basic if...else
// Switch Statements - 

/* switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}
 */
// Practical Example:
/* const select = document.querySelector("select");
const para = document.querySelector("p");

select.addEventListener("change", setWeather);

function setWeather() {
  const choice = select.value;

  switch (choice) {
    case "sunny":
      para.textContent =
        "It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.";
      break;
    case "rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
 */
// Ternary operator

// Like an if...else statement, but shorter code
// condition ? run this code : run this code instead

// Regular Expressions (REGEX)
 