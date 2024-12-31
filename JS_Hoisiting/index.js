/**
a = undefined;
b  = undefined;
*/
// EXAMPLE 1
var c = a + b;
console.log("a, b", a, b);
var a = 10;
var b = 20;
console.log("c = ", c);  // NaN 
console.log("a, b", a, b); // 10, 20
console.log("c =", a + b); // 30

// EXAMPLE 2
console.log(age); // undefined
var age = 10;
console.log(age); // 10

/**
 * Scoping
 */
// Example 1
var a = 20;
function greet() {
    a =  30;
    console.log(a); // 30
}
console.log(a); // 20
greet();

// Example 2
var a = 20;

function greet() {
    var a = 30;
    console.log(a); // 
}
console.log(a); // 
greet();
var b = 30;


