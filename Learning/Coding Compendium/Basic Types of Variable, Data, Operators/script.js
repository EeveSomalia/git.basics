// this is a comment, it is ignored by the JavaScript engine.
// It is used to explain the code or to provide additional information.

/**
 * This is a multi-line comment.
 * it is ignored by the JavaScript engine.
*/

/* Types of Variables in JavaScript
* In JavaScript, there are three main ways to declare variables:   
* const    - for constant variables, values that won't change.
* let      - for variables that can change, but not globally.
* var      - for variables that can change, but globally. (Old-School Method, not 
*            recomended to use it in modern JavaScript)
*/

/* Types of Data in JavaScript
* string  - Text, enclosed in quotes. 
*           Example: "Hello, World!" or 'Hello, World!'.
* number  - Numeric values, can be integers or floats. 
*           Example: 1, 2, 3,42, 3.14.
* boolean - True or False values. Example: true, false. 
*           Example: true, false.
* array   - A collection of items, can be of any type, enclosed in square brackets.
*           Example: [1, 2, 3], ["apple", "banana", "cherry"].
* object  - A collection of key-value pairs, enclosed in curly braces.
*           Example: { name: "John", age: 30, city: "New York" }.
*/

let myvariable = "Hello, World!";
console.log(myvariable);

const name = "Shay"; //string
const age = 30; //number
const isStudent = true; //boolean
const hobbies = ["reading", "coding", "gaming"]; //array
const person = { firstName : "Shay", lastName: "Doe", age: 30 }; //object

console.log(name, age, isStudent, hobbies, person);

/* Types of Operators in JavaScript
* Arithmetic Operators: +, -, *, /, % (modulus)
* Assignment Operators: =, +=, -=, *=, /=
* Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
* Logical Operators: && (and), || (or), ! (not)
*/

console.log("Operators");
const x = 10;
const y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x & y);

console.log(x > y); // true
console.log(x === "10"); // false (strict equality)
console.log(x !== y); // true


/* console.logging for debugging
* console.log() is used to print messages to the console for debugging purposes.
* console.warn()   is used to print warning messages.
* console.error()  is used to print error messages.
*/

console.log("This is a console log message.");
console.warn("This is a warning message.");
console.error("This is an error message.");