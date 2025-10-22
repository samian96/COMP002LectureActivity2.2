console.log ("myGreeting"); 
var myGreeting = 'Hello, World!'; // output "Hello, World" when 'myGreeting' is entered into console

const pi = Math.PI; // built in global mathematical function
console.log (pi); // outputs: 3.14159 when 'piValue' is entered into console using Math input

console.log (pi);
var pi = 'Did you know pi starts with 3.14?'; // pi can not be redeclared, causing both the Math.PI to crash, as well as this variable for the text input to crash. This variable can only be assigned to one function.

var myNumber = Math.min(5); // static method for built-in mathematical objects, returns the smallest value
console.log (myNumber); // Console keeps throwing error codes, not sure if due to var pi still being active.